import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaCommandDto } from './dto/createAbaCommand.dto';
import { UpdateAbaCommandDto } from './dto/updateAbaCommand.dto';
import { AbaCommandRepository } from './abaCommand.repository';
import { QueryAbaCommandDto } from './dto/queryAbaCommand.dto';
import { AbaCommandDocument } from 'src/entities/AbaCommand.entity';

@Injectable()
export class AbaCommandService {
  constructor(private readonly abaCommandRepository: AbaCommandRepository) {}

  async create(createAbaCommandDto: CreateAbaCommandDto): Promise<AbaCommandDocument> {
    try {
      return await this.abaCommandRepository.create(createAbaCommandDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaCommandDto): Promise<{ data: AbaCommandDocument[]; total: number }> {
    try {
      return await this.abaCommandRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaCommandDocument> {
    try {
      return await this.abaCommandRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaCommandDto: UpdateAbaCommandDto): Promise<AbaCommandDocument> {
    try {
      return await this.abaCommandRepository.update(id, updateAbaCommandDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaCommandDocument> {
    try {
      return await this.abaCommandRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}