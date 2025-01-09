import { Injectable } from '@nestjs/common';
import { CreateChecklistDenverDto } from './dto/create-checklist-denver.dto';
import { UpdateChecklistDenverDto } from './dto/update-checklist-denver.dto';

@Injectable()
export class ChecklistDenverService {
  create(createChecklistDenverDto: CreateChecklistDenverDto) {
    return 'This action adds a new checklistDenver';
  }

  findAll() {
    return `This action returns all checklistDenver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checklistDenver`;
  }

  update(id: number, updateChecklistDenverDto: UpdateChecklistDenverDto) {
    return `This action updates a #${id} checklistDenver`;
  }

  remove(id: number) {
    return `This action removes a #${id} checklistDenver`;
  }
}
