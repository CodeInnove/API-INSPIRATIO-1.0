import { Injectable } from '@nestjs/common';
import { CreateAnamneseGeneralDto } from './dto/create-anamnese_general.dto';
import { UpdateAnamneseGeneralDto } from './dto/update-anamnese_general.dto';

@Injectable()
export class AnamneseGeneralService {
  create(createAnamneseGeneralDto: CreateAnamneseGeneralDto) {
    return 'This action adds a new anamneseGeneral';
  }

  findAll() {
    return `This action returns all anamneseGeneral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anamneseGeneral`;
  }

  update(id: number, updateAnamneseGeneralDto: UpdateAnamneseGeneralDto) {
    return `This action updates a #${id} anamneseGeneral`;
  }

  remove(id: number) {
    return `This action removes a #${id} anamneseGeneral`;
  }
}
