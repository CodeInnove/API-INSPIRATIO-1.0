import { Injectable } from "@nestjs/common";
import { ScaleMchatRepository } from "./scaleMchat.repository";

@Injectable()
export class ScaleMchatService {
  constructor(
    private readonly scaleMchatRepository: ScaleMchatRepository
  ) {}

  async create(data: any) {
    return this.scaleMchatRepository.create(data);
  }

  async findAll() {
    return this.scaleMchatRepository.findAll();
  }

  async findById(id: string) {
    return this.scaleMchatRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.scaleMchatRepository.update(id, data);
  }

  async delete(id: string) {
    return this.scaleMchatRepository.delete(id);
  }
}