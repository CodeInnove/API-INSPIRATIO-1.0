import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectsCommand,
  ListObjectsCommand,
} from '@aws-sdk/client-s3';
import * as fs from 'fs';
import * as path from 'path';
import { Readable } from 'stream';

@Injectable()
export class AwsS3Service {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadFile(fileContent: Buffer, fileName: string): Promise<any> {
    try {
      const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: fileContent,
        Key: fileName,
      });
      const uploadResult = await this.s3Client.send(command);
      return uploadResult;
    } catch (error) {
      console.error(`AwsS3Service >> uploadFile >> Error: ${error}`);
      throw error;
    }
  }

  async downloadFile(fileKey: string): Promise<any> {
    try {
      const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileKey,
      });
      const file = await this.s3Client.send(command);
      return file;
    } catch (error) {
      console.error(`AwsS3Service >> downloadFile >> Error: ${error}`);
      throw error;
    }
  }

  async createFileFromS3(fileKey: string): Promise<void> {
    try {
      const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileKey,
      });
      const file = await this.s3Client.send(command);

      const dir = path.join(process.cwd(), 'tmp');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);

      return new Promise((resolve, reject) => {
        const location = path.join(dir, fileKey);
        const fileStream = fs.createWriteStream(location);

        if (file.Body instanceof Readable) {
          file.Body.pipe(fileStream);
        } else {
          reject(new Error('File body is not a readable stream'));
        }

        fileStream.on('finish', resolve);
        fileStream.on('error', reject);
      });
    } catch (error) {
      console.error(`AwsS3Service >> createFileFromS3 >> Error: ${error}`);
      throw error;
    }
  }

  async deleteFiles(fileKeyList: string[]): Promise<void> {
    try {
      const objects = fileKeyList.map((key) => ({ Key: key }));
      const command = new DeleteObjectsCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Delete: { Objects: objects },
      });
      await this.s3Client.send(command);
    } catch (error) {
      console.error(`AwsS3Service >> deleteFiles >> Error: ${error}`);
      throw error;
    }
  }

  async listFiles(): Promise<any> {
    try {
      const command = new ListObjectsCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
      });
      const bucket = await this.s3Client.send(command);
      return bucket.Contents;
    } catch (error) {
      console.error(`AwsS3Service >> listFiles >> Error: ${error}`);
      throw error;
    }
  }
}