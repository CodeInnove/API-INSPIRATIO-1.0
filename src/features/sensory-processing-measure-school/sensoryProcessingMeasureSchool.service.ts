import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureSchoolDto } from './dto/createSensoryProcessingMeasureSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolDto } from './dto/updateSensoryProcessingMeasureSchool.dto';
import { ISensoryProcessingMeasureSchoolEntity } from 'src/entities/sensoryProcessingMeasureSchool.entity';
import { SpmSchoolRepository } from './sensoryProcessingMeasureSchool.repository';

@Injectable()
export class SensoryProcessingMeasureSchoolService {
  constructor(
    private readonly spmSchoolRepository: SpmSchoolRepository
  ) {}

  async create(data: CreateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
      return await this.spmSchoolRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<ISensoryProcessingMeasureSchoolEntity[]> {
    try {
      return await this.spmSchoolRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
      return await this.spmSchoolRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
      return await this.spmSchoolRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
      return await this.spmSchoolRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
