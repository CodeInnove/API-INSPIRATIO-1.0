import { HttpException, HttpStatus, Injectable } from '@nestjs/common';


import { SpmHomeRepository } from './sensoryProcessingMeasure.repository';
import { UpdateSensoryProcessingMeasureDto } from './dto/updateSensoryProcessingMeasure.dto';
import { Ethnicity, ISpmpHome } from './types/sensoryProcessingMeasure';
import { CreateSensoryProcessingMeasureHomeDto, ScoreHomeDto } from './dto/createSensoryProcessingMeasure.dto';
import { QuerySpmHomeDto } from './dto/querySensoryProcessingMeasure.dto';
import { ISpmHomeEntity } from 'src/entities/sensoryProcessingMeasureHome.entity';

type SpmpData = Omit<ISpmpHome, 'scores'> & { scores: { [key: string]: number } }

@Injectable()
export class SensoryProcessingMeasureService {
    constructor(
        private readonly spmPreSchoolHomeRepository: SpmHomeRepository,
    ) { }

    private scoreMap = { 'N': 1, 'O': 2, 'F': 3, 'S': 4 };

    private calculateScoresSpmHome(data: CreateSensoryProcessingMeasureHomeDto | UpdateSensoryProcessingMeasureDto): ScoreHomeDto {
        const scores = { SOC: 0, VIS: 0, HEA: 0, TOU: 0, ITEMS: 0, BOD: 0, BAL: 0, PLA: 0 };

        const sumScores = (category: keyof typeof scores, values: any) => {
            if(values) {
              for (const key in values) {
                 if (typeof values[key] === 'string') {
                    scores[category] += this.scoreMap[values[key]] || 0;
                   }
              }
           }
        };
        
    sumScores('SOC', data.participationSocial);
    sumScores('VIS', data.vision);
    sumScores('HEA', data.hearing);
    sumScores('TOU', data.touch);
    sumScores('ITEMS', data.smellAndTaste);
    sumScores('BOD', data.bodyAwareness);
    sumScores('BAL', data.balanceAndMovement);
    sumScores('PLA', data.planningAndIdeation);

        return scores as ScoreHomeDto;
    }

    private transformPropertiesSpmHome<T>(obj: Record<string, any> | undefined): T | undefined {
        if (!obj) {
            return undefined;
        }
        const transformed: Record<string, 'N' | 'O' | 'F' | 'S'> = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key) && typeof obj[key] === 'string' && ['N', 'O', 'F', 'S'].includes(obj[key])) {
            transformed[key] = obj[key] as 'N' | 'O' | 'F' | 'S';
          }
        }
        return transformed as T;
    }

   private transformDtoToSpmHome(data: CreateSensoryProcessingMeasureHomeDto): CreateSensoryProcessingMeasureHomeDto {
        const { participationSocial, 
          vision, hearing, touch, 
          smellAndTaste, bodyAwareness, 
          balanceAndMovement, planningAndIdeation,
          birthDate, doctor, responsable, 
           relationshipWithChild, patient, date,
            age, ethnicity, gender, 
            comment, ...rest } = data;
        const scoreHome = this.calculateScoresSpmHome(data);
        return {
            ...rest,
            birthDate: birthDate,
            ethnicity: ethnicity as Ethnicity,
              gender: gender as 'M' | 'F',
           doctor: doctor,
            responsable: responsable,
            relationshipWithChild: relationshipWithChild,
              patient: patient,
                date: date,
              age: age,
              comment: comment,
              scoresHome: {
                SOC: scoreHome.SOC,
                VIS: scoreHome.VIS,
                HEA: scoreHome.HEA,
                TOU: scoreHome.TOU,
                ITEMS: scoreHome.ITEMS,
                BOD: scoreHome.BOD,
                BAL: scoreHome.BAL,
                PLA: scoreHome.PLA,
            },
            participationSocial: this.transformPropertiesSpmHome(participationSocial),
            vision: this.transformPropertiesSpmHome(vision),
            hearing: this.transformPropertiesSpmHome(hearing),
            touch: this.transformPropertiesSpmHome(touch),
            smellAndTaste: this.transformPropertiesSpmHome(smellAndTaste),
            bodyAwareness: this.transformPropertiesSpmHome(bodyAwareness),
            balanceAndMovement: this.transformPropertiesSpmHome(balanceAndMovement),
            planningAndIdeation: this.transformPropertiesSpmHome(planningAndIdeation),
        } 
    }

    private transformUpdateDtoToSpmpHome(data: UpdateSensoryProcessingMeasureDto): UpdateSensoryProcessingMeasureDto {
         const { participationSocial, vision, 
          hearing, touch, smellAndTaste, 
          bodyAwareness, balanceAndMovement, 
          planningAndIdeation, birthDate, 
          doctor, responsable, 
          relationshipWithChild, 
          patient, date, age, ethnicity, 
          gender, comment, ...rest } = data;
          const scoreHome = this.calculateScoresSpmHome(data);
        return {
            ...rest,
            birthDate: birthDate,
            ethnicity: ethnicity as Ethnicity,
            gender: gender as 'M' | 'F',
            doctor: doctor,
            responsable: responsable,
            relationshipWithChild: relationshipWithChild,
            patient: patient,
            date: date,
            age: age,
            comment: comment,
              scoresHome: {
                SOC: scoreHome.SOC,
                VIS: scoreHome.VIS,
                HEA: scoreHome.HEA,
                TOU: scoreHome.TOU,
                ITEMS: scoreHome.ITEMS,
                BOD: scoreHome.BOD,
                BAL: scoreHome.BAL,
                PLA: scoreHome.PLA
              },
           participationSocial: this.transformPropertiesSpmHome(participationSocial),
            vision: this.transformPropertiesSpmHome(vision),
            hearing: this.transformPropertiesSpmHome(hearing),
            touch: this.transformPropertiesSpmHome(touch),
            smellAndTaste: this.transformPropertiesSpmHome(smellAndTaste),
            bodyAwareness: this.transformPropertiesSpmHome(bodyAwareness),
            balanceAndMovement: this.transformPropertiesSpmHome(balanceAndMovement),
            planningAndIdeation: this.transformPropertiesSpmHome(planningAndIdeation),
        }
    }


    async create(data: CreateSensoryProcessingMeasureHomeDto): Promise<ISpmHomeEntity> {
        try {
              const spmpData = this.transformDtoToSpmHome(data);
            return await this.spmPreSchoolHomeRepository.create(spmpData);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(query: QuerySpmHomeDto) {
        try {
            return await this.spmPreSchoolHomeRepository.findAll(query);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async findById(id: string): Promise<ISpmHomeEntity> {
      try {
          return await this.spmPreSchoolHomeRepository.findById(id);
      } catch (error) {
          throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
  }

    async update(id: string, update: UpdateSensoryProcessingMeasureDto): Promise<ISpmHomeEntity> {
        try {
          const spmpData = this.transformUpdateDtoToSpmpHome(update);
          return await this.spmPreSchoolHomeRepository.update(id, spmpData);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<ISpmHomeEntity> {
        try {
            return await this.spmPreSchoolHomeRepository.delete(id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}