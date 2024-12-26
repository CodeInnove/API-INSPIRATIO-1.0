import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePortageGuidetoPreschoolEducationDto } from "./dto/create-portage-guideto-preschool-education.dto";
import { UpdatePortageGuidetoPreschoolEducationDto } from "./dto/update-portage-guideto-preschool-education.dto";
import { IPortageGuidetoPreschoolEducationEntity } from "src/entities/portage-guideto-preschool-education.entity";
import { PortageGuidetoPreschoolEducationRepository } from "./portage-guideto-preschool-education.repository";



@Injectable()
export class PortageGuidetoPreschoolEducationService {
  constructor(
    private readonly portageGuidetoPreschoolEducationRepository: PortageGuidetoPreschoolEducationRepository
  ) {}

  async create(portageGuidetoPreschoolEducation: CreatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    try {
      return await this.portageGuidetoPreschoolEducationRepository.create(portageGuidetoPreschoolEducation);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IPortageGuidetoPreschoolEducationEntity[]> {
    try {
      return await this.portageGuidetoPreschoolEducationRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    try {
      return await this.portageGuidetoPreschoolEducationRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, portageGuidetoPreschoolEducationUpdate: UpdatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    try {
      return await this.portageGuidetoPreschoolEducationRepository.update(id, portageGuidetoPreschoolEducationUpdate);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    try {
      return await this.portageGuidetoPreschoolEducationRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}