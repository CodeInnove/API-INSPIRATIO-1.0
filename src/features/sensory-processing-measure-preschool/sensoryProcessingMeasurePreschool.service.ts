import { Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasurePreschoolDto } from './dto/createSensoryProcessingMeasurePreschool.dto';
import { UpdateSensoryProcessingMeasurePreschoolDto } from './dto/updateSensoryProcessingMeasurePreschool.dto';

@Injectable()
export class SensoryProcessingMeasurePreschoolService {
  create(createSensoryProcessingMeasurePreschoolDto: CreateSensoryProcessingMeasurePreschoolDto) {
    return 'This action adds a new sensoryProcessingMeasurePreschool';
  }

  findAll() {
    return `This action returns all sensoryProcessingMeasurePreschool`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensoryProcessingMeasurePreschool`;
  }

  update(id: number, updateSensoryProcessingMeasurePreschoolDto: UpdateSensoryProcessingMeasurePreschoolDto) {
    return `This action updates a #${id} sensoryProcessingMeasurePreschool`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensoryProcessingMeasurePreschool`;
  }
}
