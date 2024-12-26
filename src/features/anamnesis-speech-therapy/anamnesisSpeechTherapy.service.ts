import { Injectable } from "@nestjs/common";
import { AnamnesisSpeechTherapyRepository } from "./anamnesisSpeechTherapy.repository";

@Injectable()
export class AnamnesisSpeechTherapyService {
  constructor(
    private readonly anamnesisSpeechTherapyRepository: AnamnesisSpeechTherapyRepository
  ) {}

  async create(data: any) {
    return this.anamnesisSpeechTherapyRepository.create(data);
  }

  async findAll() {
    return this.anamnesisSpeechTherapyRepository.findAll();
  }

  async findById(id: string) {
    return this.anamnesisSpeechTherapyRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.anamnesisSpeechTherapyRepository.update(id, data);
  }

  async delete(id: string) {
    return this.anamnesisSpeechTherapyRepository.delete(id);
  }
}