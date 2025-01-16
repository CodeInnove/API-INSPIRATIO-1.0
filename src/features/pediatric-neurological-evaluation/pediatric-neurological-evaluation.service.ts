import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePediatricNeurologicalEvaluationDto } from './dto/create-pediatric-neurological-evaluation.dto';
import { UpdatePediatricNeurologicalEvaluationDto } from './dto/update-pediatric-neurological-evaluation.dto';
import { IPediatricNeurologicalEvaluationEntity } from 'src/entities/pediatric-neurological-evaluation.entity';
import { PediatricNeurologicalEvaluationRepository } from './pediatric-neurological-evaluation.repository';

@Injectable()
export class PediatricNeurologicalEvaluationService {
  constructor(
    private readonly pneRepository: PediatricNeurologicalEvaluationRepository
  ) {}

  async create(data: CreatePediatricNeurologicalEvaluationDto): Promise<IPediatricNeurologicalEvaluationEntity> {
    try {
      return await this.pneRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IPediatricNeurologicalEvaluationEntity[]> {
    try {
      return await this.pneRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IPediatricNeurologicalEvaluationEntity> {
    try {
      return await this.pneRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdatePediatricNeurologicalEvaluationDto): Promise<IPediatricNeurologicalEvaluationEntity> {
    try {
      return await this.pneRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IPediatricNeurologicalEvaluationEntity> {
    try {
      return await this.pneRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
