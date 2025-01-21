import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOccupationalTherapyAnamnesisDto } from './dto/createOccupationalTherapyAnamnesis.dto';
import { UpdateOccupationalTherapyAnamnesisDto } from './dto/updateOccupationalTherapyAnamnesis.dto';
import { OccupationalTherapyAnamnesisRepository } from './occupationalTherapyAnamnesis.repository';
import { IOccupationalTherapyAnamnesisEntity } from 'src/entities/occupationalTherapyAnamnesis.entity';

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

  async findAll(): Promise<IOccupationalTherapyAnamnesisEntity[]> {
    try {
      return await this.occupationalTherapyAnamnesisRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IOccupationalTherapyAnamnesisEntity> {
    try {
      return await this.occupationalTherapyAnamnesisRepository.findOne(id);
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
