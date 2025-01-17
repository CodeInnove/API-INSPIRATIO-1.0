import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasurePreschoolDto } from './dto/createSensoryProcessingMeasurePreschool.dto';
import { UpdateSensoryProcessingMeasurePreschoolDto } from './dto/updateSensoryProcessingMeasurePreschool.dto';
import { SpmPreSchoolHomeRepository } from './sensoryProcessingMeasurePreSchoolHome.repository';
import { ISensoryProcessingMeasurePreschoolEntity } from 'src/entities/sensoryProcessingMeasurePreschoolHome.entity';

@Injectable()
export class SensoryProcessingMeasurePreschoolService {
  constructor(
    private readonly spmPreSchoolHomeRepository: SpmPreSchoolHomeRepository
  ) {}

  async create(data: CreateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    try {
      return await this.spmPreSchoolHomeRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<ISensoryProcessingMeasurePreschoolEntity[]> {
    try {
      return await this.spmPreSchoolHomeRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    try {
      return await this.spmPreSchoolHomeRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    try {
      return await this.spmPreSchoolHomeRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    try {
      return await this.spmPreSchoolHomeRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
