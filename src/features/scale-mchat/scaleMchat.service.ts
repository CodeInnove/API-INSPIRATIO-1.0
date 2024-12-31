import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ScaleMchatRepository } from "./scaleMchat.repository";
import { QueryScaleMchatDto } from "./dto/scaleMchatQuery";
import { CreateScaleMchatDto } from "./dto/scaleMchatCreate.dto";
import { UpdateScaleMchatDto } from "./dto/scaleMchatUpdate.dto";

@Injectable()
export class ScaleMchatService {
  constructor(
    private readonly scaleMchatRepository: ScaleMchatRepository
  ) {}

  async create(data: CreateScaleMchatDto) {
    try {
      return await this.scaleMchatRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryScaleMchatDto) {
    try {
      return await this.scaleMchatRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string) {
    try {
      return await this.scaleMchatRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: any) {
    try {
      return await this.scaleMchatRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try {
      return await this.scaleMchatRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}