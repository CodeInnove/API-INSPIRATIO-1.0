import { Injectable } from "@nestjs/common";
import { PsychopedagogicalAnamnesisRepository } from "./psychopedagogicalAnamnesis.repository";

@Injectable()
export class PsychopedagogicalAnamnesisService {
  constructor(
    private readonly psychopedagogicalAnamnesisRepository: PsychopedagogicalAnamnesisRepository
  ) {}

  async create(data: any) {
    return this.psychopedagogicalAnamnesisRepository.create(data);
  }

  async findAll() {
    return this.psychopedagogicalAnamnesisRepository.findAll();
  }

  async findById(id: string) {
    return this.psychopedagogicalAnamnesisRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.psychopedagogicalAnamnesisRepository.update(id, data);
  }

  async delete(id: string) {
    return this.psychopedagogicalAnamnesisRepository.delete(id);
  }
}