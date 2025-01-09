import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateChecklistDenverDto } from './dto/create-checklist-denver.dto';
import { UpdateChecklistDenverDto } from './dto/update-checklist-denver.dto';
import { ChecklistDenverRepository } from './checklist-denver.repository';
import { IChecklistDenverEntity } from 'src/entities/checklist-denver.entity';


@Injectable()
export class ChecklistDenverService {
  constructor(
    private readonly denverRepository: ChecklistDenverRepository
  ){}
  async create(createChecklistDenverDto: CreateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    try{
      return await this.denverRepository.create(createChecklistDenverDto);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IChecklistDenverEntity[]> {
    try{
      return await this.denverRepository.findAll();
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IChecklistDenverEntity> {
    try{
      return await this.denverRepository.findOne(id);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateChecklistDenverDto: UpdateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    try{
      return await this.denverRepository.update(id, updateChecklistDenverDto);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try{
      return await this.denverRepository.delete(id);
    } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
