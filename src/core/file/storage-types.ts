import 'dotenv/config';
import * as multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

import fileNameConfig from './file-name.config';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  endpoint: `https://s3.${process.env.AWS_REGION}.amazonaws.com`,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const storageTypes = {
  s3: multerS3({
    s3: s3Client,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: fileNameConfig,
  }),
};

export default storageTypes;