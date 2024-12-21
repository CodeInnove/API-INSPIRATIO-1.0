import { Injectable } from "@nestjs/common";
import { ScaleASRSRepository } from "./scaleASRS.repository";

@Injectable()
export class ScaleASRSService {
  constructor(
    private readonly scaleASRSRepository: ScaleASRSRepository
  ) {}

  async create(data: any) {
    return this.scaleASRSRepository.create(data);
  }

  async findAll() {
    return this.scaleASRSRepository.findAll();
  }

  async findById(id: string) {
    return this.scaleASRSRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.scaleASRSRepository.update(id, data);
  }

  async delete(id: string) {
    return this.scaleASRSRepository.delete(id);
  }
}