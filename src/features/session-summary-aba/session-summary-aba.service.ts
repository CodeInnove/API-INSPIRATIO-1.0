import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSessionSummaryAbaDto } from './dto/create-session-summary-aba.dto';
import { UpdateSessionSummaryAbaDto } from './dto/update-session-summary-aba.dto';
import { SessionSummaryABARepository } from './session-summary-aba.repository';
import { ISessionSummaryABAEntity } from 'src/entities/session-summary-aba.entity';

@Injectable()
export class SessionSummaryAbaService {
  constructor(
    private readonly sessionABARepository: SessionSummaryABARepository
  ) {}

  async create(data: CreateSessionSummaryAbaDto): Promise<ISessionSummaryABAEntity> {
    try {
      return await this.sessionABARepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<ISessionSummaryABAEntity[]> {
    try {
      return await this.sessionABARepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<ISessionSummaryABAEntity> {
    try {
      return await this.sessionABARepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateSessionSummaryAbaDto): Promise<ISessionSummaryABAEntity> {
    try {
      return await this.sessionABARepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<ISessionSummaryABAEntity> {
    try {
      return await this.sessionABARepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
