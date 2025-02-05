import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaEyeContactDto } from './dto/create-aba-eye-contact.dto';
import { UpdateAbaEyeContactDto } from './dto/update-aba-eye-contact.dto';
import { AbaEyeContactRepository } from './aba-eye-contact.repository';
import { QueryAbaEyeContactDto } from './dto/query-aba-eye-contact.dto';
import { AbaEyeContactDocument } from 'src/entities/aba-eye-contact.entity';

@Injectable()
export class AbaEyeContactService {
  constructor(private readonly abaEyeContactRepository: AbaEyeContactRepository) {}

  async create(createAbaEyeContactDto: CreateAbaEyeContactDto): Promise<AbaEyeContactDocument> {
    try {
      return await this.abaEyeContactRepository.create(createAbaEyeContactDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaEyeContactDto): Promise<{ data: AbaEyeContactDocument[]; total: number }> {
    try {
      return await this.abaEyeContactRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaEyeContactDocument> {
    try {
      return await this.abaEyeContactRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaEyeContactDto: UpdateAbaEyeContactDto): Promise<AbaEyeContactDocument> {
    try {
      return await this.abaEyeContactRepository.update(id, updateAbaEyeContactDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaEyeContactDocument> {
    try {
      return await this.abaEyeContactRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}