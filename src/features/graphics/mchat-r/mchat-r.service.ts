import { Injectable } from '@nestjs/common';
//import { TotalDto } from './dto/create-mchat-r.dto';
import { UpdateMchatRDto } from './dto/update-mchat-r.dto';
import { MchatRRepository } from './mchar-r.repository'; 

@Injectable()
export class MchatRService {
  constructor(
    private readonly mchatRRepository: MchatRRepository
  ){}

  create(data: any) {
    return this.mchatRRepository.create(data)
  }

  findAll() {
    return this.mchatRRepository.findAll();
  }

  findOne(id: string) {
    return this.mchatRRepository.findById(id);
  }

  update(id: string, data: any) {
    return this.mchatRRepository.update(id, data);
  }

  remove(id: string) {
    return this.mchatRRepository.delete(id);
  }
}
