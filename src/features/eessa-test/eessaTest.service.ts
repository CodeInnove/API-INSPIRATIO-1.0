import { Injectable } from '@nestjs/common';
import { CreateEessaTestDto } from './dto/createEessaTest.dto';
import { UpdateEessaTestDto } from './dto/updateEessaTest.dto';

@Injectable()
export class EessaTestService {
  create(createEessaTestDto: CreateEessaTestDto) {
    return 'This action adds a new eessaTest';
  }

  findAll() {
    return `This action returns all eessaTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eessaTest`;
  }

  update(id: number, updateEessaTestDto: UpdateEessaTestDto) {
    return `This action updates a #${id} eessaTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} eessaTest`;
  }
}
