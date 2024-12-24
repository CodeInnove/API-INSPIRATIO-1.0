import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {CreateAfcpDto} from './dto/create-anamnesis-for-cerebral-palsy.dto';
import { UpdateAfcpDto} from './dto/update-anamnesis-for-cerebral-palsy.dto';
import { IAnamneseCerebralEntity } from 'src/entities/anamnesis-for-cerebral-palsy.entity';
import { AfcpRepository } from './afcp.repository';

@Injectable()
export class AnamnesisForCerebralPalsyService {
   constructor(
      private readonly afcpRepository: AfcpRepository
    ) {}

  async createAfl(afl: CreateAfcpDto): Promise<IAnamneseCerebralEntity> {
      try {
        return await this.afcpRepository.create(afl);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }

  async findAllAfls(): Promise<IAnamneseCerebralEntity[]> {
      try {
        return await this.afcpRepository.findAll();
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async findOneAfl(id: string): Promise<IAnamneseCerebralEntity> {
      try {
        return await this.afcpRepository.findOne(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async updateAfl(id: string, afl: UpdateAfcpDto): Promise<IAnamneseCerebralEntity> {
      try {
        return await this.afcpRepository.update(id, afl);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async deleteAfl(id: string): Promise<IAnamneseCerebralEntity> {
      try {
        return await this.afcpRepository.delete(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  }
