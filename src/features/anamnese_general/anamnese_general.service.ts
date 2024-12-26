import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateAnamneseGeneralDto } from "./dto/create-anamnese_general.dto";
import { UpdateAnamneseGeneralDto } from "./dto/update-anamnese_general.dto";
import { IGeneralAnamneseEntity } from "src/entities/anamnese_general.entity";
import { GeneralAnamneseRepository } from "./anamnese_geral.repository";



@Injectable()
export class GeneralAnamneseService {
  constructor(
    private readonly generalAnamneseRepository: GeneralAnamneseRepository
  ) {}

  async create(generalAnamnese: CreateAnamneseGeneralDto): Promise<IGeneralAnamneseEntity> {
    try {
      return await this.generalAnamneseRepository.create(generalAnamnese);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IGeneralAnamneseEntity[]> {
    try {
      return await this.generalAnamneseRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IGeneralAnamneseEntity> {
    try {
      return await this.generalAnamneseRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, anamneseUpdate: UpdateAnamneseGeneralDto): Promise<IGeneralAnamneseEntity> {
    try {
      return await this.generalAnamneseRepository.update(id, anamneseUpdate);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IGeneralAnamneseEntity> {
    try {
      return await this.generalAnamneseRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}