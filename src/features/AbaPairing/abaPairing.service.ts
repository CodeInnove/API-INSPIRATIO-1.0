import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbaPairingDto } from './dto/createAbaPairing.dto';
import { UpdateAbaPairingDto } from './dto/updateAbaPairing';
import { AbaPairingRepository } from './abaPairing.repository';
import { QueryAbaPairingDto } from './dto/queryAbaPairing.dto';
import { AbaPairingDocument } from 'src/entities/AbaPairing.entity';

@Injectable()
export class AbaPairingService {
  constructor(private readonly abaPairingRepository: AbaPairingRepository) {}

  async create(createAbaPairingDto: CreateAbaPairingDto): Promise<AbaPairingDocument> {
    try {
      return await this.abaPairingRepository.create(createAbaPairingDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAbaPairingDto): Promise<{ data: AbaPairingDocument[]; total: number }> {
    try {
      return await this.abaPairingRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<AbaPairingDocument> {
    try {
      return await this.abaPairingRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAbaPairingDto: UpdateAbaPairingDto): Promise<AbaPairingDocument> {
    try {
      return await this.abaPairingRepository.update(id, updateAbaPairingDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<AbaPairingDocument> {
    try {
      return await this.abaPairingRepository.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}