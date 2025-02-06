import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaMotorImitationDto } from './dto/createAbaMotorImitation.dto';
import { UpdateAbaMotorImitationDto } from './dto/updateAbaMotorImitation.dto';
import { AbaMotorImitationRepository } from './abaMotorImitation.repository';
import { QueryAbaMotorImitationDto } from './dto/queryAbaMotorImitation.dto';
import { AbaMotorImitationDocument } from 'src/entities/AbaMotorImitation.entity';

@Injectable()
export class AbaMotorImitationService {
  constructor(private readonly abaMotorImitationRepository: AbaMotorImitationRepository) {}

  async create(createAbaMotorImitationDto: CreateAbaMotorImitationDto): Promise<AbaMotorImitationDocument> {
    try {
      return await this.abaMotorImitationRepository.create(createAbaMotorImitationDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaMotorImitationDto): Promise<{ data: AbaMotorImitationDocument[]; total: number }> {
    try {
      return await this.abaMotorImitationRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaMotorImitationDocument> {
    try {
      return await this.abaMotorImitationRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaMotorImitationDto: UpdateAbaMotorImitationDto): Promise<AbaMotorImitationDocument> {
    try {
      return await this.abaMotorImitationRepository.update(id, updateAbaMotorImitationDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaMotorImitationDocument> {
    try {
      return await this.abaMotorImitationRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}