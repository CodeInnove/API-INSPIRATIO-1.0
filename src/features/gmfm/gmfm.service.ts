import { Injectable } from '@nestjs/common';
import { CreateGmfmDto } from './dto/create-gmfm.dto';
import { UpdateGmfmDto } from './dto/update-gmfm.dto';

@Injectable()
export class GmfmService {
  create(createGmfmDto: CreateGmfmDto) {
    return 'This action adds a new gmfm';
  }

  findAll() {
    return `This action returns all gmfm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gmfm`;
  }

  update(id: number, updateGmfmDto: UpdateGmfmDto) {
    return `This action updates a #${id} gmfm`;
  }

  remove(id: number) {
    return `This action removes a #${id} gmfm`;
  }
}
