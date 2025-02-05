import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaTouchDto } from './dto/createAbaTouch.dto';
import { UpdateAbaTouchDto } from './dto/updateAbaTouch.dto';
import { AbaTouchRepository } from './abaTouch.repository';
import { QueryAbaTouchDto } from './dto/queryAbaTouch.dto';
import { AbaTouchDocument } from 'src/entities/AbaTouch.entity';

@Injectable()
export class AbaTouchService {
  constructor(private readonly abaTouchRepository: AbaTouchRepository) {}

  async create(createAbaTouchDto: CreateAbaTouchDto): Promise<AbaTouchDocument> {
    try {
      return await this.abaTouchRepository.create(createAbaTouchDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaTouchDto): Promise<{ data: AbaTouchDocument[]; total: number }> {
    try {
      return await this.abaTouchRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaTouchDocument> {
    try {
      return await this.abaTouchRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaTouchDto: UpdateAbaTouchDto): Promise<AbaTouchDocument> {
    try {
      return await this.abaTouchRepository.update(id, updateAbaTouchDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaTouchDocument> {
    try {
      return await this.abaTouchRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}