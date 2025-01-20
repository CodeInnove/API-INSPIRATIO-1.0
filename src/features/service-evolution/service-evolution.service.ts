import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceEvolutionDto } from './dto/create-service-evolution.dto';
import { UpdateServiceEvolutionDto } from './dto/update-service-evolution.dto';
import { ServiceEvolutionRepository } from './service-evolution.repository';
import { ServiceEvolutionEntity } from 'src/entities/service-evolution.entity';

@Injectable()
export class ServiceEvolutionService {
  constructor(
    private readonly serviceEvolutionRepository: ServiceEvolutionRepository
  ) {}

  async create(data: CreateServiceEvolutionDto): Promise<ServiceEvolutionEntity> {
    try {
      return await this.serviceEvolutionRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<ServiceEvolutionEntity[]> {
    try {
      return await this.serviceEvolutionRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<ServiceEvolutionEntity> {
    try {
      return await this.serviceEvolutionRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateServiceEvolutionDto): Promise<ServiceEvolutionEntity> {
    try {
      return await this.serviceEvolutionRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<ServiceEvolutionEntity> {
    try {
      return await this.serviceEvolutionRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}