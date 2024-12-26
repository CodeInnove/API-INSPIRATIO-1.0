import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IAutismBehaviorChecklistEntity } from "src/entities/autismBehaviorChecklist.entity";
import { UpdateAutismBehaviorChecklistDto } from "./dto/autismBehaviorChecklistUpdate.dto";
import { CreateAutismBehaviorChecklistDto } from "./dto/autismBehaviorChecklistCreate.dto";
import { AutismBehaviorChecklistRepository } from "./autismBehavioChecklist.repository";


@Injectable()
export class AutismBehaviorChecklistService {
  constructor(
    private readonly autismBehaviorChecklistRepository: AutismBehaviorChecklistRepository
  ) {}

  async create(autismBehaviorChecklist: CreateAutismBehaviorChecklistDto): Promise<IAutismBehaviorChecklistEntity> {
    try {
      return await this.autismBehaviorChecklistRepository.create(autismBehaviorChecklist);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IAutismBehaviorChecklistEntity[]> {
    try {
      return await this.autismBehaviorChecklistRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IAutismBehaviorChecklistEntity> {
    try {
      return await this.autismBehaviorChecklistRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, autismBehaviorChecklist: UpdateAutismBehaviorChecklistDto): Promise<IAutismBehaviorChecklistEntity> {
    try {
      return await this.autismBehaviorChecklistRepository.update(id, autismBehaviorChecklist);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IAutismBehaviorChecklistEntity> {
    try {
      return await this.autismBehaviorChecklistRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}