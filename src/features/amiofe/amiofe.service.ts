import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAmiofeDto } from './dto/create-amiofe.dto';
import { UpdateAmiofeDto } from './dto/update-amiofe.dto';
import { IAmiofeEntity } from 'src/entities/amiofe.entity';
import { AmiofeRepository } from './amiofe.repository';
import { QueryAmiofeDto } from './dto/query-amiofe.dto';

@Injectable()
export class AmiofeService {
  constructor(
    private readonly amiofeRepository: AmiofeRepository
  ){}
  async create(createChecklistDenverDto: CreateAmiofeDto): Promise<IAmiofeEntity> {
    try{
      return await this.amiofeRepository.createAmiofe(createChecklistDenverDto);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QueryAmiofeDto) {
    try{
      return await this.amiofeRepository.findAll(query);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string): Promise<IAmiofeEntity> {
    try{
      return await this.amiofeRepository.findById(id);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateChecklistDenverDto: UpdateAmiofeDto): Promise<IAmiofeEntity> {
    try{
      return await this.amiofeRepository.update(id, updateChecklistDenverDto);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try{
      return await this.amiofeRepository.delete(id);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}