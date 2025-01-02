import { Injectable } from '@nestjs/common';
import { CreateOccupationalTherapyAnamnesisDto } from './dto/createOccupationalTherapyAnamnesis.dto';
import { UpdateOccupationalTherapyAnamnesisDto } from './dto/updateOccupationalTherapyAnamnesis.dto';

@Injectable()
export class OccupationalTherapyAnamnesisService {
  create(createOccupationalTherapyAnamnesisDto: CreateOccupationalTherapyAnamnesisDto) {
    return 'This action adds a new occupationalTherapyAnamnesis';
  }

  findAll() {
    return `This action returns all occupationalTherapyAnamnesis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} occupationalTherapyAnamnesis`;
  }

  update(id: number, updateOccupationalTherapyAnamnesisDto: UpdateOccupationalTherapyAnamnesisDto) {
    return `This action updates a #${id} occupationalTherapyAnamnesis`;
  }

  remove(id: number) {
    return `This action removes a #${id} occupationalTherapyAnamnesis`;
  }
}
