import { Injectable } from '@nestjs/common';
import { CreateAutismBehaviorChecklistDto } from './dto/autismBehaviorChecklistCreate.dto';
import { UpdateAutismBehaviorChecklistDto } from './dto/autismBehaviorChecklistUpdate.dto';

@Injectable()
export class AutismBehaviorChecklistService {
  create(createAutismBehaviorChecklistDto: CreateAutismBehaviorChecklistDto) {
    return 'This action adds a new autismBehaviorChecklist';
  }

  findAll() {
    return `This action returns all autismBehaviorChecklist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autismBehaviorChecklist`;
  }

  update(id: number, updateAutismBehaviorChecklistDto: UpdateAutismBehaviorChecklistDto) {
    return `This action updates a #${id} autismBehaviorChecklist`;
  }

  remove(id: number) {
    return `This action removes a #${id} autismBehaviorChecklist`;
  }
}
