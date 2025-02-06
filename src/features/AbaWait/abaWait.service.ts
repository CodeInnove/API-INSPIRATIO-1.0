import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaWaitDto } from './dto/createAbaWait.dto';
import { UpdateAbaWaitDto } from './dto/updateAbaWait.dto';
import { AbaWaitRepository } from './abaWait.repository';
import { QueryAbaWaitDto } from './dto/queryAbaWait.dto';
import { AbaWaitDocument } from 'src/entities/AbaWait.entity';

@Injectable()
export class AbaWaitService {
  constructor(private readonly abaWaitRepository: AbaWaitRepository) {}

  async create(createAbaWaitDto: CreateAbaWaitDto): Promise<AbaWaitDocument> {
    try {
      return await this.abaWaitRepository.create(createAbaWaitDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaWaitDto): Promise<{ data: AbaWaitDocument[]; total: number }> {
    try {
      return await this.abaWaitRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaWaitDocument> {
    try {
      return await this.abaWaitRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaWaitDto: UpdateAbaWaitDto): Promise<AbaWaitDocument> {
    try {
      return await this.abaWaitRepository.update(id, updateAbaWaitDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaWaitDocument> {
    try {
      return await this.abaWaitRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}