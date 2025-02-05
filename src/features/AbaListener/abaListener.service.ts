import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaListenerDto } from './dto/createAbaListener.dto';
import { UpdateAbaListenerDto } from './dto/updateAbaListener.dto';
import { AbaListenerRepository } from './abaListener.repository';
import { QueryAbaListenerDto } from './dto/queryAbaListener.dto';
import { AbaListenerDocument } from 'src/entities/AbaListener.entity';

@Injectable()
export class AbaListenerService {
  constructor(private readonly abaListenerRepository: AbaListenerRepository) {}

  async create(createAbaListenerDto: CreateAbaListenerDto): Promise<AbaListenerDocument> {
    try {
      return await this.abaListenerRepository.create(createAbaListenerDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaListenerDto): Promise<{ data: AbaListenerDocument[]; total: number }> {
    try {
      return await this.abaListenerRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaListenerDocument> {
    try {
      return await this.abaListenerRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaListenerDto: UpdateAbaListenerDto): Promise<AbaListenerDocument> {
    try {
      return await this.abaListenerRepository.update(id, updateAbaListenerDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaListenerDocument> {
    try {
      return await this.abaListenerRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}