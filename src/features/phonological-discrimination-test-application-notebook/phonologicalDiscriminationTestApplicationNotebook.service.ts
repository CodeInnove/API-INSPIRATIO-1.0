import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PhonologicalDiscriminationTestApplicationNotebookRepository } from "./phonologicalDiscriminationTestApplicationNotebook.repository";
import { QuerPDTANDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookQuery.dto";
import { UpdatePhonologicalDiscriminationTestApplicationNotebookDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookUpdate.dto";
import { CreatePhonologicalDiscriminationTestApplicationNotebookDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookCreate.dto";

@Injectable()
export class PhonologicalDiscriminationTestApplicationNotebookService {
  constructor(
    private readonly phonologicalDiscriminationTestApplicationNotebookRepository: PhonologicalDiscriminationTestApplicationNotebookRepository
  ) {}

  async create(data: CreatePhonologicalDiscriminationTestApplicationNotebookDto) {
    return this.phonologicalDiscriminationTestApplicationNotebookRepository.create(data);
  }

  async findAll(query: QuerPDTANDto) {
    try {
      return this.phonologicalDiscriminationTestApplicationNotebookRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string) {
    try {
      return this.phonologicalDiscriminationTestApplicationNotebookRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: UpdatePhonologicalDiscriminationTestApplicationNotebookDto) {
    try {
      return this.phonologicalDiscriminationTestApplicationNotebookRepository.update(id, data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try {
      return this.phonologicalDiscriminationTestApplicationNotebookRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
    return this.phonologicalDiscriminationTestApplicationNotebookRepository.delete(id);
  }
}