import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSessionSummaryAtDto } from './dto/create-session-summary-at.dto';
import { UpdateSessionSummaryAtDto } from './dto/update-session-summary-at.dto';
import { SessionSummaryAtEntity } from 'src/entities/session-summary-at.entity';
import { SessionSummaryATRepository } from './session-summary-at.repository';

@Injectable()
export class SessionSummaryAtService {
  constructor(
    private readonly sessionSummaryATRepository: SessionSummaryATRepository
  ) {}

  async create(data: CreateSessionSummaryAtDto): Promise<SessionSummaryAtEntity> {
    try {
      return await this.sessionSummaryATRepository.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<SessionSummaryAtEntity[]> {
    try {
      return await this.sessionSummaryATRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<SessionSummaryAtEntity> {
    try {
      return await this.sessionSummaryATRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateSessionSummaryAtDto): Promise<SessionSummaryAtEntity> {
    try {
      return await this.sessionSummaryATRepository.update(id, update);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<SessionSummaryAtEntity> {
    try {
      return await this.sessionSummaryATRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
