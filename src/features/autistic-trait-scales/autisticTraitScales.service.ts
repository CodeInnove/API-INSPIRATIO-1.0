import { Injectable } from '@nestjs/common';
import { CreateAutisticTraitScaleDto } from './dto/createAutisticTraitScales.dto';
import { UpdateAutisticTraitScaleDto } from './dto/updateAutisticTraitScales.dto';

@Injectable()
export class AutisticTraitScalesService {
  create(createAutisticTraitScaleDto: CreateAutisticTraitScaleDto) {
    return 'This action adds a new autisticTraitScale';
  }

  findAll() {
    return `This action returns all autisticTraitScales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autisticTraitScale`;
  }

  update(id: number, updateAutisticTraitScaleDto: UpdateAutisticTraitScaleDto) {
    return `This action updates a #${id} autisticTraitScale`;
  }

  remove(id: number) {
    return `This action removes a #${id} autisticTraitScale`;
  }
}
