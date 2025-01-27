import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePortageGuidetoPhysiotherapyDto } from './dto/create-portage-guideto-physiotherapy.dto';
import { UpdatePortageGuidetoPhysiotherapyDto } from './dto/update-portage-guideto-physiotherapy.dto';
import { IPortageGuidetoPhysiotherapyEntity } from 'src/entities/portage-guideto-physiotherapy.entity';
import { PortageGuidetoPhysiotherapyRepository } from './portage-guideto-physiotherapy.repository';


type ResponseType = 'NAO' | 'AV' | 'SIM' 
@Injectable()
export class PortageGuidetoPhysiotherapyService {
  constructor(
    private readonly portagePhysiotherapyRepository: PortageGuidetoPhysiotherapyRepository
  ) {}

  private scoreResponse(response: ResponseType): number {
    const scoreMap = {
      'SIM': 1,
      'AV': 0.5,
      'NAO': 0,
    };

    
    return scoreMap[response] ?? 0;
  }

  private calculateAreaScore(data: any): number {
    let totalScore = 0;
    if (!data) return totalScore;

    for (const key in data) {
      if (typeof data[key] === 'string') {
        totalScore += this.scoreResponse(data[key] as ResponseType);
      }
    }

    return totalScore;
  }

  async create(dto: CreatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    try {
      const motor =
        this.calculateAreaScore(dto.motorDevelopment0To1Year) +
        this.calculateAreaScore(dto.motorDevelopment1To2Years) +
        this.calculateAreaScore(dto.motorDevelopment2To3Years) +
        this.calculateAreaScore(dto.motorDevelopment3To4Years) +
        this.calculateAreaScore(dto.motorDevelopment4To5Years) +
        this.calculateAreaScore(dto.motorDevelopment5To6Years);

      const entityToCreate = {
        ...dto,
        motor,
      };

      const createdEntity = await this.portagePhysiotherapyRepository.create(entityToCreate);
      return createdEntity;
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
