import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureDto } from './dto/createSensoryProcessingMeasure.dto';
import { UpdateSensoryProcessingMeasureDto } from './dto/updateSensoryProcessingMeasure.dto';
import { SpmHomeRepository } from './sensoryProcessingMeasure.repository';
import { ISensoryProcessingMeasureEntity } from 'src/entities/sensoryProcessingMeasureHome.entity';

@Injectable()
export class SensoryProcessingMeasureService {
  constructor(
    private readonly spmHomeRepository: SpmHomeRepository
  ) {}

  async createSpm(data: CreateSensoryProcessingMeasureDto): Promise<ISensoryProcessingMeasureEntity> {
    try {
      return await this.spmHomeRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAllSpm(): Promise<ISensoryProcessingMeasureEntity[]> {
    try {
      return await this.spmHomeRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneSpm(id: string): Promise<ISensoryProcessingMeasureEntity> {
    try {
      return await this.spmHomeRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async updateSpm(id: string, update: UpdateSensoryProcessingMeasureDto): Promise<ISensoryProcessingMeasureEntity> {
    try {
      return await this.spmHomeRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteSpm(id: string): Promise<ISensoryProcessingMeasureEntity> {
    try {
      return await this.spmHomeRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}

