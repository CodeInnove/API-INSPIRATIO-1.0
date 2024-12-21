import { Injectable } from "@nestjs/common";
import { ScaleAsrsRepository } from "./scaleASRS.repository";

@Injectable()
export class ScaleAsrsService {
  constructor(
    private readonly scaleAsrsRepository: ScaleAsrsRepository
  ) {}

  async create(data: any) {
    return this.scaleAsrsRepository.create(data);
  }

  async findAll() {
    return this.scaleAsrsRepository.findAll();
  }

  async findById(id: string) {
    return this.scaleAsrsRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.scaleAsrsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.scaleAsrsRepository.delete(id);
  }
}