import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePerformanceAssessmentDto } from './dto/create-performance-assessment.dto';
import { UpdatePerformanceAssessmentDto } from './dto/update-performance-assessment.dto';
import { IPerformanceAssessmenteEntity } from 'src/entities/performance-assessment.entity';
import { PerformanceAssessmentRepository } from './performance-assesment.repository';

@Injectable()
export class PerformanceAssessmentService {
  constructor(
    private readonly performanceAssessmentRepository: PerformanceAssessmentRepository
  ) {}

  async create(data: CreatePerformanceAssessmentDto): Promise<IPerformanceAssessmenteEntity> {
    try {
      return await this.performanceAssessmentRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IPerformanceAssessmenteEntity[]> {
    try {
      return await this.performanceAssessmentRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IPerformanceAssessmenteEntity> {
    try {
      return await this.performanceAssessmentRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdatePerformanceAssessmentDto): Promise<IPerformanceAssessmenteEntity> {
    try {
      return await this.performanceAssessmentRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IPerformanceAssessmenteEntity> {
    try {
      return await this.performanceAssessmentRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
