import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVbmappPeiDto } from './dto/create-vbmapp-pei.dto';
import { UpdateVbmappPeiDto } from './dto/update-vbmapp-pei.dto';
import { VbmappRepository } from './vbmapp-pei.repository';
import { VbmappEntity } from 'src/entities/vbmapp-pei.entity';

@Injectable()
export class VbmappService {
  constructor(
    private readonly vbmappRepository: VbmappRepository
  ) {}

  async create(afl: CreateVbmappPeiDto): Promise<VbmappEntity> {
    try {
      return await this.vbmappRepository.create(afl);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<VbmappEntity[]> {
    try {
      return await this.vbmappRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<VbmappEntity> {
    try {
      return await this.vbmappRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, vbmapp: UpdateVbmappPeiDto): Promise<VbmappEntity> {
    try {
      return await this.vbmappRepository.update(id, vbmapp);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<VbmappEntity> {
    try {
      return await this.vbmappRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}