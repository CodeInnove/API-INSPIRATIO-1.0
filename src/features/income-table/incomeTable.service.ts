import { Injectable } from "@nestjs/common";
import { IncomeTableRepository } from "./incomeTables.repository";

@Injectable()
export class IncomeTableService {
  constructor(
    private readonly incomeTableRepository: IncomeTableRepository
  ) {}

  async create(data: any) {
    return this.incomeTableRepository.create(data);
  }

  async findAll() {
    return this.incomeTableRepository.findAll();
  }

  async findById(id: string) {
    return this.incomeTableRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.incomeTableRepository.update(id, data);
  }

  async delete(id: string) {
    return this.incomeTableRepository.delete(id);
  }
}