import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/createSensoryProcessingMeasureSchoolPreSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/updateSensoryProcessingMeasureSchoolPreSchool.dto';
import { SpmSchoolPreSchoolRepository } from './sensoryProcessingMeasureSchoolPreSchool.repository';
import { ISensoryProcessingMeasureSchoolPreSchoolEntity } from 'src/entities/sensoryProcessingMeasureSchoolPreSchool.entity';

@Injectable()
export class SensoryProcessingMeasureSchoolPreschoolService {
  constructor(
    private readonly spmSchoolPreSchoolRepository: SpmSchoolPreSchoolRepository
  ) {}

  async create(data: CreateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
      return await this.spmSchoolPreSchoolRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity[]> {
    try {
      return await this.spmSchoolPreSchoolRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
      return await this.spmSchoolPreSchoolRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
      return await this.spmSchoolPreSchoolRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
      return await this.spmSchoolPreSchoolRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
