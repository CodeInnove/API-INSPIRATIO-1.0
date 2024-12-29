import { Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/createSensoryProcessingMeasureSchoolPreSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/updateSensoryProcessingMeasureSchoolPreSchool.dto';

@Injectable()
export class SensoryProcessingMeasureSchoolPreschoolService {
  create(createSensoryProcessingMeasureSchoolPreschoolDto: CreateSensoryProcessingMeasureSchoolPreschoolDto) {
    return 'This action adds a new sensoryProcessingMeasureSchoolPreschool';
  }

  findAll() {
    return `This action returns all sensoryProcessingMeasureSchoolPreschool`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensoryProcessingMeasureSchoolPreschool`;
  }

  update(id: number, updateSensoryProcessingMeasureSchoolPreschoolDto: UpdateSensoryProcessingMeasureSchoolPreschoolDto) {
    return `This action updates a #${id} sensoryProcessingMeasureSchoolPreschool`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensoryProcessingMeasureSchoolPreschool`;
  }
}
