import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { ISensoryProcessingMeasurePreschoolEntity } from 'src/entities/sensoryProcessingMeasurePreschoolHome.entity';

import { SpmHomeRepository } from './sensoryProcessingMeasure.repository';
import { UpdateSensoryProcessingMeasureDto } from './dto/updateSensoryProcessingMeasure.dto';
import { Ethnicity, ISpmpHome } from './types/sensoryProcessingMeasure';
import { CreateSensoryProcessingMeasureHomeDto, ScoreDto } from './dto/createSensoryProcessingMeasure.dto';
import { QuerySpmHomeDto } from './dto/querySensoryProcessingMeasure.dto';
import { ISensoryProcessingMeasureEntity } from 'src/entities/sensoryProcessingMeasureHome.entity';

type SpmpData = Omit<ISpmpHome, 'scores'> & { scores: { [key: string]: number } }

@Injectable()
export class SensoryProcessingMeasureService {
    constructor(
        private readonly spmPreSchoolHomeRepository: SpmHomeRepository,
    ) { }

    private scoreMap = { 'N': 1, 'O': 2, 'F': 3, 'S': 4 };

    private calculateScores(data: CreateSensoryProcessingMeasureHomeDto | UpdateSensoryProcessingMeasureDto): ScoreDto {
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

        return scores as ScoreDto;
    }

    private transformProperties<T>(obj: Record<string, any> | undefined): T | undefined {
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

   private transformDtoToSpmp(data: CreateSensoryProcessingMeasureHomeDto): CreateSensoryProcessingMeasureHomeDto {
    const { participationSocial, vision, 
      hearing, touch, smellAndTaste, 
      bodyAwareness, balanceAndMovement, 
      planningAndIdeation, /*bitrhDate*/
      doctor, /*responsable*/
      /*relationshipWithChild*/ 
      patient, date, /*age*//* ethnicity*/
      /*gender*/ comment, ...rest } = data;
      const scores = this.calculateScores(data);
    return {
        ...rest,
        //bitrhDate: bitrhDate,
        //ethnicity: ethnicity as Ethnicity,
         //gender: gender as 'M' | 'F',
       doctor: doctor,
        //responsable: responsable,
        //relationshipWithChild: relationshipWithChild,
          patient: patient,
            date: date,
          //age: age,
            comment: comment,
            scores: {
              SOC: scores.SOC,
              VIS: scores.VIS,
              HEA: scores.HEA,
              TOU: scores.TOU,
              ITEMS: scores.ITEMS,
              BOD: scores.BOD,
              BAL: scores.BAL,
              PLA: scores.PLA
            },
            participationSocial: this.transformProperties(participationSocial),
            vision: this.transformProperties(vision),
            hearing: this.transformProperties(hearing),
            touch: this.transformProperties(touch),
            smellAndTaste: this.transformProperties(smellAndTaste),
            bodyAwareness: this.transformProperties(bodyAwareness),
            balanceAndMovement: this.transformProperties(balanceAndMovement),
            planningAndIdeation: this.transformProperties(planningAndIdeation),
        } 
    }

    private transformUpdateDtoToSpmpHome(data: UpdateSensoryProcessingMeasureDto): UpdateSensoryProcessingMeasureDto {
         const { participationSocial, vision, 
          hearing, touch, smellAndTaste, 
          bodyAwareness, balanceAndMovement, 
          planningAndIdeation, /*bitrhDate*/
          doctor, /*responsable*/
          /*relationshipWithChild*/ 
          patient, date, /*age*//* ethnicity*/
          /*gender*/ comment, ...rest } = data;
          const scores = this.calculateScores(data);
        return {
            ...rest,
            //bitrhDate: bitrhDate,
            //ethnicity: ethnicity as Ethnicity,
             //gender: gender as 'M' | 'F',
           doctor: doctor,
            //responsable: responsable,
            //relationshipWithChild: relationshipWithChild,
              patient: patient,
                date: date,
              //age: age,
                comment: comment,
                scores: {
                  SOC: scores.SOC,
                  VIS: scores.VIS,
                  HEA: scores.HEA,
                  TOU: scores.TOU,
                  ITEMS: scores.ITEMS,
                  BOD: scores.BOD,
                  BAL: scores.BAL,
                  PLA: scores.PLA
                },
           participationSocial: this.transformProperties(participationSocial),
            vision: this.transformProperties(vision),
            hearing: this.transformProperties(hearing),
            touch: this.transformProperties(touch),
            smellAndTaste: this.transformProperties(smellAndTaste),
            bodyAwareness: this.transformProperties(bodyAwareness),
            balanceAndMovement: this.transformProperties(balanceAndMovement),
            planningAndIdeation: this.transformProperties(planningAndIdeation),
        }
    }


    async create(data: CreateSensoryProcessingMeasureHomeDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
        try {
              const spmpData = this.transformDtoToSpmp(data);
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

    async findById(id: string): Promise<ISensoryProcessingMeasureEntity> {
      try {
          return await this.spmPreSchoolHomeRepository.findById(id);
      } catch (error) {
          throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
  }

    async update(id: string, update: UpdateSensoryProcessingMeasureDto): Promise<ISensoryProcessingMeasureEntity> {
        try {
          const spmpData = this.transformUpdateDtoToSpmpHome(update);
          return await this.spmPreSchoolHomeRepository.update(id, spmpData);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<ISensoryProcessingMeasureEntity> {
        try {
            return await this.spmPreSchoolHomeRepository.delete(id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}