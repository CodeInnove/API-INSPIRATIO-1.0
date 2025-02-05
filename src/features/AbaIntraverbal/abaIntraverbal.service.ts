import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaIntraverbalDto } from './dto/createAbaIntraverbal.dto';
import { UpdateAbaIntraverbalDto } from './dto/updateAbaIntraverbal.dto';
import { AbaIntraverbalRepository } from './abaIntraverbal.repository';
import { QueryAbaIntraverbalDto } from './dto/queryAbaIntraverbal.dto';
import { AbaIntraverbalDocument } from 'src/entities/AbaIntraverbal.entity';

@Injectable()
export class AbaIntraverbalService {
  constructor(private readonly abaIntraverbalRepository: AbaIntraverbalRepository) {}

  async create(createAbaIntraverbalDto: CreateAbaIntraverbalDto): Promise<AbaIntraverbalDocument> {
    try {
      return await this.abaIntraverbalRepository.create(createAbaIntraverbalDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaIntraverbalDto): Promise<{ data: AbaIntraverbalDocument[]; total: number }> {
    try {
      return await this.abaIntraverbalRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaIntraverbalDocument> {
    try {
      return await this.abaIntraverbalRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaIntraverbalDto: UpdateAbaIntraverbalDto): Promise<AbaIntraverbalDocument> {
    try {
      return await this.abaIntraverbalRepository.update(id, updateAbaIntraverbalDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaIntraverbalDocument> {
    try {
      return await this.abaIntraverbalRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}