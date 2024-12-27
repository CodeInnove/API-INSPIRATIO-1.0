import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {CreateAfcpDto} from './dto/create-anamnesis-for-cerebral-palsy.dto';
import { UpdateAfcpDto} from './dto/update-anamnesis-for-cerebral-palsy.dto';
import { IAnamneseCerebralEntity } from 'src/entities/anamnesis-for-cerebral-palsy.entity';
import { AfcpRepository } from './afcp.repository';
import { query } from 'express';
import { Query } from 'mongoose';
import { QueryAfcpDto } from './dto/query-anamnesis-for-cerebral-palsy.dto';

@Injectable()
export class AnamnesisForCerebralPalsyService {
   constructor(
      private readonly afcpRepository: AfcpRepository
    ) {}

  async createAfcp(afcp: CreateAfcpDto): Promise<IAnamneseCerebralEntity> {
      try {
        return await this.afcpRepository.createAfcp(afcp);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }

  async findAll(query: QueryAfcpDto) {
      try {
        return await this.afcpRepository.findAll(query);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async findById(id: string) {
      try {
        return await this.afcpRepository.findById(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async updateAfl(id: string, afcp: UpdateAfcpDto): Promise<IAnamneseCerebralEntity> {
      try {
        return await this.afcpRepository.update(id, afcp);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async deleteAfl(id: string){
      try {
        return await this.afcpRepository.delete(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  }
