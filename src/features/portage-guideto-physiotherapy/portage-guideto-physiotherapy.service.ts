import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePortageGuidetoPhysiotherapyDto } from './dto/create-portage-guideto-physiotherapy.dto';
import { UpdatePortageGuidetoPhysiotherapyDto } from './dto/update-portage-guideto-physiotherapy.dto';
import { IPortageGuidetoPhysiotherapyEntity } from 'src/entities/portage-guideto-physiotherapy.entity';
import { PortageGuidetoPhysiotherapyRepository } from './portage-guideto-physiotherapy.repository';
import { QueryPortageMotorPhysioDto } from './dto/query-portage-guideto-physiotherapy.dto';


type ResponseType = 'NAO' | 'AV' | 'SIM';
@Injectable()
export class PortageGuidetoPhysiotherapyService {
    constructor(
        private readonly portagePhysiotherapyRepository: PortageGuidetoPhysiotherapyRepository,
    ) { }

    private scoreResponse(response: ResponseType): number {
        const scoreMap = {
            SIM: 1,
            AV: 0.5,
            NAO: 0,
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

    private calculateTotalMotorScore(entity: IPortageGuidetoPhysiotherapyEntity): number {
        return (
            (entity.motorDevelopment0To1YearScore || 0) +
            (entity.motorDevelopment1To2YearsScore || 0) +
            (entity.motorDevelopment2To3YearsScore || 0) +
            (entity.motorDevelopment3To4YearsScore || 0) +
            (entity.motorDevelopment4To5YearsScore || 0) +
            (entity.motorDevelopment5To6YearsScore || 0)
        );
    }

   async create(
        dto: CreatePortageGuidetoPhysiotherapyDto,
    ): Promise<IPortageGuidetoPhysiotherapyEntity> {
        try {
            const {
                year,
                motorDevelopment0To1Year,
                motorDevelopment1To2Years,
                motorDevelopment2To3Years,
                motorDevelopment3To4Years,
                motorDevelopment4To5Years,
                motorDevelopment5To6Years,
            } = dto;

            const motorDevelopment0To1YearScore = this.calculateAreaScore(
                motorDevelopment0To1Year,
            );
            const motorDevelopment1To2YearsScore = this.calculateAreaScore(
                motorDevelopment1To2Years,
            );
            const motorDevelopment2To3YearsScore = this.calculateAreaScore(
                motorDevelopment2To3Years,
            );
            const motorDevelopment3To4YearsScore = this.calculateAreaScore(
                motorDevelopment3To4Years,
            );
            const motorDevelopment4To5YearsScore = this.calculateAreaScore(
                motorDevelopment4To5Years,
            );
            const motorDevelopment5To6YearsScore = this.calculateAreaScore(
                motorDevelopment5To6Years,
            );

            const entityToCreate = {
                patient: dto.patient,
                date: dto.date,
                birthDay: dto.birthDay,
                doctor: dto.doctor,
                diagnoses: dto.diagnoses,
                year,
                motorDevelopment0To1Year,
                motorDevelopment1To2Years,
                motorDevelopment2To3Years,
                motorDevelopment3To4Years,
                motorDevelopment4To5Years,
                motorDevelopment5To6Years,
                motorDevelopment0To1YearScore, 
                motorDevelopment1To2YearsScore,
                motorDevelopment2To3YearsScore,
                motorDevelopment3To4YearsScore,
                motorDevelopment4To5YearsScore,
                motorDevelopment5To6YearsScore,
                motor: this.calculateTotalMotorScore({
                    motorDevelopment0To1YearScore,
                    motorDevelopment1To2YearsScore,
                    motorDevelopment2To3YearsScore,
                    motorDevelopment3To4YearsScore,
                    motorDevelopment4To5YearsScore,
                    motorDevelopment5To6YearsScore,
                } as IPortageGuidetoPhysiotherapyEntity),
            };

            const createdEntity =
                await this.portagePhysiotherapyRepository.create(entityToCreate);
            return createdEntity;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(query: QueryPortageMotorPhysioDto ) {
      try {
          return await this.portagePhysiotherapyRepository.findAll(query);
      } catch (error) {
          throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
  }

  async findById(id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
    try {
      return await this.portagePhysiotherapyRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, dto: UpdatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    try {
      const existingEntity = await this.portagePhysiotherapyRepository.findById(id);
      if (!existingEntity) {
          throw new HttpException('Entity not found', HttpStatus.NOT_FOUND);
      }


    const motorDevelopment0To1YearScore = this.calculateAreaScore(dto.motorDevelopment0To1Year);
    const motorDevelopment1To2YearsScore = this.calculateAreaScore(dto.motorDevelopment1To2Years);
    const motorDevelopment2To3YearsScore = this.calculateAreaScore(dto.motorDevelopment2To3Years);
    const motorDevelopment3To4YearsScore = this.calculateAreaScore(dto.motorDevelopment3To4Years);
    const motorDevelopment4To5YearsScore = this.calculateAreaScore(dto.motorDevelopment4To5Years);
    const motorDevelopment5To6YearsScore = this.calculateAreaScore(dto.motorDevelopment5To6Years);

     const updatedEntity = {
        patient: dto.patient,
        date: dto.date,
        birthDay: dto.birthDay,
        doctor: dto.doctor,
        diagnoses: dto.diagnoses,
          year: dto.year,
          motorDevelopment0To1Year: dto.motorDevelopment0To1Year,
          motorDevelopment1To2Years: dto.motorDevelopment1To2Years,
          motorDevelopment2To3Years: dto.motorDevelopment2To3Years,
          motorDevelopment3To4Years: dto.motorDevelopment3To4Years,
          motorDevelopment4To5Years: dto.motorDevelopment4To5Years,
          motorDevelopment5To6Years: dto.motorDevelopment5To6Years,
          motorDevelopment0To1YearScore,
          motorDevelopment1To2YearsScore,
          motorDevelopment2To3YearsScore,
          motorDevelopment3To4YearsScore,
          motorDevelopment4To5YearsScore,
          motorDevelopment5To6YearsScore,
          motor: this.calculateTotalMotorScore({
              ...existingEntity,
              ...dto,
              motorDevelopment0To1YearScore,
              motorDevelopment1To2YearsScore,
              motorDevelopment2To3YearsScore,
             motorDevelopment3To4YearsScore,
              motorDevelopment4To5YearsScore,
              motorDevelopment5To6YearsScore,
          } as IPortageGuidetoPhysiotherapyEntity),
      }

      return await this.portagePhysiotherapyRepository.update(id, updatedEntity);
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






  
  /*
  // Adiciona um método para buscar por ano e semestre
  async findByYearAndSemester(
    year: number,
    semester: string,
): Promise<IPortageGuidetoPhysiotherapyEntity[]> {
    try {
        const entities = await this.portagePhysiotherapyRepository.findByCondition(
            { year, semester },
        ) as IPortageGuidetoPhysiotherapyEntity[];
        // Calcula a pontuação total `motor` para cada entidade
        const entitiesWithTotalScore = entities.map((entity) => {
            return {
                ...entity,
                motor: this.calculateTotalMotorScore(entity),
            };
        });
        return entitiesWithTotalScore;
    } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
}*/
}
