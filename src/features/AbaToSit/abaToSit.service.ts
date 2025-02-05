import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaToSitDto } from './dto/createAbaToSit.dto';
import { UpdateAbaToSitDto } from './dto/updateAbaToSit.dto';
import { AbaToSitRepository } from './abaToSit.repository';
import { QueryAbaToSitDto } from './dto/queryAbaToSit.dto';
import { AbaToSitDocument } from 'src/entities/AbaToSit.entity';

@Injectable()
export class AbaToSitService {
  constructor(private readonly abaToSitRepository: AbaToSitRepository) {}

  async create(createAbaToSitDto: CreateAbaToSitDto): Promise<AbaToSitDocument> {
    try {
      return await this.abaToSitRepository.create(createAbaToSitDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaToSitDto): Promise<{ data: AbaToSitDocument[]; total: number }> {
    try {
      return await this.abaToSitRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaToSitDocument> {
    try {
      return await this.abaToSitRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaToSitDto: UpdateAbaToSitDto): Promise<AbaToSitDocument> {
    try {
      return await this.abaToSitRepository.update(id, updateAbaToSitDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaToSitDocument> {
    try {
      return await this.abaToSitRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}