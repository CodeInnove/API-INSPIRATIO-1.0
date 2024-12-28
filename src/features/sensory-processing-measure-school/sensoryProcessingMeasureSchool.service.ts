import { Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureSchoolDto } from './dto/createSensoryProcessingMeasureSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolDto } from './dto/updateSensoryProcessingMeasureSchool.dto';

@Injectable()
export class SensoryProcessingMeasureSchoolService {
  create(createSensoryProcessingMeasureSchoolDto: CreateSensoryProcessingMeasureSchoolDto) {
    return 'This action adds a new sensoryProcessingMeasureSchool';
  }

  findAll() {
    return `This action returns all sensoryProcessingMeasureSchool`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensoryProcessingMeasureSchool`;
  }

  update(id: number, updateSensoryProcessingMeasureSchoolDto: UpdateSensoryProcessingMeasureSchoolDto) {
    return `This action updates a #${id} sensoryProcessingMeasureSchool`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensoryProcessingMeasureSchool`;
  }
}
