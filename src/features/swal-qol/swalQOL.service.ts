import { Injectable } from '@nestjs/common';
import { CreateSwalQolDto } from './dto/createswalQOL.dto';
import { UpdateSwalQolDto } from './dto/updateswalQOL.dto'; 

@Injectable()
export class SwalQolService {
  create(createSwalQolDto: CreateSwalQolDto) {
    return 'This action adds a new swalQol';
  }

  findAll() {
    return `This action returns all swalQol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} swalQol`;
  }

  update(id: number, updateSwalQolDto: UpdateSwalQolDto) {
    return `This action updates a #${id} swalQol`;
  }

  remove(id: number) {
    return `This action removes a #${id} swalQol`;
  }
}
