import { Injectable } from "@nestjs/common";
import { SociallySavvyChecklistRepository } from "./sociallySavvyChecklist.repository";

@Injectable()
export class SociallySavvyChecklistService {
  constructor(
    private readonly sociallySavvyChecklistRepository: SociallySavvyChecklistRepository
  ) {}

  async create(data: any) {
    return this.sociallySavvyChecklistRepository.create(data);
  }

  async findAll() {
    return this.sociallySavvyChecklistRepository.findAll();
  }

  async findById(id: string) {
    return this.sociallySavvyChecklistRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.sociallySavvyChecklistRepository.update(id, data);
  }

  async delete(id: string) {
    return this.sociallySavvyChecklistRepository.delete(id);
  }
}