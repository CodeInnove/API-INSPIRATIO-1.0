import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOccupationalTherapyAnamnesisDto } from './dto/createOccupationalTherapyAnamnesis.dto';
import { UpdateOccupationalTherapyAnamnesisDto } from './dto/updateOccupationalTherapyAnamnesis.dto';
import { OccupationalTherapyAnamnesisRepository } from './occupationalTherapyAnamnesis.repository';
import { IOccupationalTherapyAnamnesisEntity } from 'src/entities/occupationalTherapyAnamnesis.entity';
import { QueryOccupationalAnamnesisTherapyDto } from './dto/queryOccupationalTherapyAnamnesis.dto';

@Injectable()
export class OccupationalTherapyAnamnesisService {
  constructor(
    private readonly occupationalTherapyAnamnesisRepository: OccupationalTherapyAnamnesisRepository
  ) {}

  async create(data: CreateOccupationalTherapyAnamnesisDto): Promise<IOccupationalTherapyAnamnesisEntity> {
    try {
      return await this.occupationalTherapyAnamnesisRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryOccupationalAnamnesisTherapyDto){
    try {
      return await this.occupationalTherapyAnamnesisRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string): Promise<IOccupationalTherapyAnamnesisEntity> {
    try {
      return await this.occupationalTherapyAnamnesisRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateOccupationalTherapyAnamnesisDto): Promise<IOccupationalTherapyAnamnesisEntity> {
    try {
      return await this.occupationalTherapyAnamnesisRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IOccupationalTherapyAnamnesisEntity> {
    try {
      return await this.occupationalTherapyAnamnesisRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
