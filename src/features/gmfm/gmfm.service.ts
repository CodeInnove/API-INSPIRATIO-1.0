import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGmfmDto } from './dto/create-gmfm.dto';
import { UpdateGmfmDto } from './dto/update-gmfm.dto';
import { IGmfmEntity } from 'src/entities/gmfm.entity';
import { GmfmRepository } from './gmfm.repository';

@Injectable()
export class GmfmService {
  constructor(
    private readonly gmfmRepository: GmfmRepository
  ) {}

  async create(gmfm: CreateGmfmDto): Promise<IGmfmEntity> {
    try {
      return await this.gmfmRepository.create(gmfm);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IGmfmEntity[]> {
    try {
      return await this.gmfmRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IGmfmEntity> {
    try {
      return await this.gmfmRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, gmfm: UpdateGmfmDto): Promise<IGmfmEntity> {
    try {
      return await this.gmfmRepository.update(id, gmfm);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IGmfmEntity> {
    try {
      return await this.gmfmRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
