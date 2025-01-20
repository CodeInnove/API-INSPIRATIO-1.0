import { Injectable } from '@nestjs/common';
import { CreateAbaEyeContactDto } from './dto/create-aba-eye-contact.dto';
import { UpdateAbaEyeContactDto } from './dto/update-aba-eye-contact.dto';

@Injectable()
export class AbaEyeContactService {
  create(createAbaEyeContactDto: CreateAbaEyeContactDto) {
    return 'This action adds a new abaEyeContact';
  }

  findAll() {
    return `This action returns all abaEyeContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abaEyeContact`;
  }

  update(id: number, updateAbaEyeContactDto: UpdateAbaEyeContactDto) {
    return `This action updates a #${id} abaEyeContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} abaEyeContact`;
  }
}
