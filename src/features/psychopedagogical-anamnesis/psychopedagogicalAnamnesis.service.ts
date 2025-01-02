import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PsychopedagogicalAnamnesisRepository } from "./psychopedagogicalAnamnesis.repository";
import { UpdatePsychopedagogicalAnamnesisDto } from "./dto/psychopedagogicalAnamnesisUpdate.dto";
import { PsychopedagogicalAnamnesisCreateDto } from "./dto/psychopedagogicalAnamnesisCreate.dto";

@Injectable()
export class PsychopedagogicalAnamnesisService {
  constructor(
    private readonly psychopedagogicalAnamnesisRepository: PsychopedagogicalAnamnesisRepository
  ) {}

  async create(data: PsychopedagogicalAnamnesisCreateDto) {
    try {
          return this.psychopedagogicalAnamnesisRepository.create(data);
        } catch (error) {
          throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
  }

  async findAll() {
    try {
      return await this.psychopedagogicalAnamnesisRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string) {
    try {
      return await this.psychopedagogicalAnamnesisRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: UpdatePsychopedagogicalAnamnesisDto) {
    try {
      return await this.psychopedagogicalAnamnesisRepository.update(id, data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try {
      return await this.psychopedagogicalAnamnesisRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}