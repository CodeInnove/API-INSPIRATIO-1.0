import { Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureDto } from './dto/create-sensory-processing-measure.dto';
import { UpdateSensoryProcessingMeasureDto } from './dto/update-sensory-processing-measure.dto';

@Injectable()
export class SensoryProcessingMeasureService {
  create(createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureDto) {
    return 'This action adds a new sensoryProcessingMeasure';
  }

  findAll() {
    return `This action returns all sensoryProcessingMeasure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensoryProcessingMeasure`;
  }

  update(id: number, updateSensoryProcessingMeasureDto: UpdateSensoryProcessingMeasureDto) {
    return `This action updates a #${id} sensoryProcessingMeasure`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensoryProcessingMeasure`;
  }
}
