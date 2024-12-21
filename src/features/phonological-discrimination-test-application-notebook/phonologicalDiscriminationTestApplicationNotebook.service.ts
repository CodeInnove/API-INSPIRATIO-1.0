import { Injectable } from "@nestjs/common";
import { PhonologicalDiscriminationTestApplicationNotebookRepository } from "./phonologicalDiscriminationTestApplicationNotebook.repository";

@Injectable()
export class PhonologicalDiscriminationTestApplicationNotebookService {
  constructor(
    private readonly phonologicalDiscriminationTestApplicationNotebookRepository: PhonologicalDiscriminationTestApplicationNotebookRepository
  ) {}

  async create(data: any) {
    return this.phonologicalDiscriminationTestApplicationNotebookRepository.create(data);
  }

  async findAll() {
    return this.phonologicalDiscriminationTestApplicationNotebookRepository.findAll();
  }

  async findById(id: string) {
    return this.phonologicalDiscriminationTestApplicationNotebookRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.phonologicalDiscriminationTestApplicationNotebookRepository.update(id, data);
  }

  async delete(id: string) {
    return this.phonologicalDiscriminationTestApplicationNotebookRepository.delete(id);
  }
}