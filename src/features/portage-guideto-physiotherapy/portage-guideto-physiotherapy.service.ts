import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePortageGuidetoPhysiotherapyDto } from './dto/create-portage-guideto-physiotherapy.dto';
import { UpdatePortageGuidetoPhysiotherapyDto } from './dto/update-portage-guideto-physiotherapy.dto';
import { IPortageGuidetoPhysiotherapyEntity } from 'src/entities/portage-guideto-physiotherapy.entity';
import { PortageGuidetoPhysiotherapyRepository } from './portage-guideto-physiotherapy.repository';

@Injectable()
export class PortageGuidetoPhysiotherapyService {
  constructor(
    private readonly portagePhysiotherapyRepository: PortageGuidetoPhysiotherapyRepository
  ) {}

  async create(portageGuidetoPreschoolEducation: CreatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    try {
      return await this.portagePhysiotherapyRepository.create(portageGuidetoPreschoolEducation);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IPortageGuidetoPhysiotherapyEntity[]> {
    try {
      return await this.portagePhysiotherapyRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
    try {
      return await this.portagePhysiotherapyRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, portageGuidetoPreschoolEducationUpdate: UpdatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    try {
      return await this.portagePhysiotherapyRepository.update(id, portageGuidetoPreschoolEducationUpdate);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
    try {
      return await this.portagePhysiotherapyRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
