import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasurePreschoolDto, ScoreDto } from './dto/createSensoryProcessingMeasurePreschool.dto';
import { SpmPreSchoolHomeRepository } from './sensoryProcessingMeasurePreSchoolHome.repository';
import { ISensoryProcessingMeasurePreschoolEntity } from 'src/entities/sensoryProcessingMeasurePreschoolHome.entity';
import { Ethnicity, ISpmpSchool } from './types/sensoryProcessingMeasurePreschool';
import { UpdateSensoryProcessingMeasurePreschoolDto } from './dto/updateSensoryProcessingMeasurePreschool.dto';
import { QuerySpmPreSchoolHomeDto } from './dto/querySensoryProcessingMeasurePreschool.dto';

type SpmpData = Omit<ISpmpSchool, 'scores'> & { scores: { [key: string]: number } }

@Injectable()
export class SensoryProcessingMeasurePreschoolService {
    constructor(
        private readonly spmPreSchoolHomeRepository: SpmPreSchoolHomeRepository,
    ) { }

    private scoreMap = { 'N': 1, 'O': 2, 'F': 3, 'S': 4 };

   private calculateScores(data: CreateSensoryProcessingMeasurePreschoolDto | UpdateSensoryProcessingMeasurePreschoolDto): ScoreDto {
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
        
    sumScores('SOC', data.participationSocialPreSchool);
    sumScores('VIS', data.visionPreSchool);
    sumScores('HEA', data.hearingPreSchool);
    sumScores('TOU', data.touchPreSchool);
    sumScores('ITEMS', data.smellAndTastePreSchool);
    sumScores('BOD', data.bodyAwarenessPreSchool);
    sumScores('BAL', data.balanceAndMovementPreSchool);
    sumScores('PLA', data.planningAndIdeationPreSchool);

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

 private transformDtoToSpmp(data: CreateSensoryProcessingMeasurePreschoolDto): CreateSensoryProcessingMeasurePreschoolDto {
        const { participationSocialPreSchool, visionPreSchool, hearingPreSchool, touchPreSchool, smellAndTastePreSchool, bodyAwarenessPreSchool, balanceAndMovementPreSchool, planningAndIdeationPreSchool, birthDate, doctor, responsable, relationshipWithChild, patient, date, age, ethnicity, gender, comment, ...rest } = data;
          const scores = this.calculateScores(data);
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
            scores: {
                SOC: scores.SOC,
                VIS: scores.VIS,
                HEA: scores.HEA,
                TOU: scores.TOU,
                ITEMS: scores.ITEMS,
                BOD: scores.BOD,
                BAL: scores.BAL,
                PLA: scores.PLA,
                },
            participationSocialPreSchool: this.transformProperties(participationSocialPreSchool),
            visionPreSchool: this.transformProperties(visionPreSchool),
            hearingPreSchool: this.transformProperties(hearingPreSchool),
            touchPreSchool: this.transformProperties(touchPreSchool),
            smellAndTastePreSchool: this.transformProperties(smellAndTastePreSchool),
            bodyAwarenessPreSchool: this.transformProperties(bodyAwarenessPreSchool),
            balanceAndMovementPreSchool: this.transformProperties(balanceAndMovementPreSchool),
            planningAndIdeationPreSchool: this.transformProperties(planningAndIdeationPreSchool),
        }
    }


    private transformUpdateDtoToSpmp(data: UpdateSensoryProcessingMeasurePreschoolDto): UpdateSensoryProcessingMeasurePreschoolDto {
      const { participationSocialPreSchool, 
        visionPreSchool, hearingPreSchool, 
        touchPreSchool, 
        smellAndTastePreSchool, 
        bodyAwarenessPreSchool, 
        balanceAndMovementPreSchool, 
        planningAndIdeationPreSchool,
         birthDate, doctor, responsable,
          relationshipWithChild, patient,
           date, age, ethnicity, gender, 
           comment, ...rest } = data;
       const scores = this.calculateScores(data);
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
            participationSocialPreSchool: this.transformProperties(participationSocialPreSchool),
            visionPreSchool: this.transformProperties(visionPreSchool),
            hearingPreSchool: this.transformProperties(hearingPreSchool),
            touchPreSchool: this.transformProperties(touchPreSchool),
            smellAndTastePreSchool: this.transformProperties(smellAndTastePreSchool),
            bodyAwarenessPreSchool: this.transformProperties(bodyAwarenessPreSchool),
            balanceAndMovementPreSchool: this.transformProperties(balanceAndMovementPreSchool),
            planningAndIdeationPreSchool: this.transformProperties(planningAndIdeationPreSchool),
        }
    }


    async create(data: CreateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
        try {
            const spmpData = this.transformDtoToSpmp(data);
            return await this.spmPreSchoolHomeRepository.create(spmpData);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(query: QuerySpmPreSchoolHomeDto) {
        try {
            return await this.spmPreSchoolHomeRepository.findAll(query);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async findById(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
      try {
          return await this.spmPreSchoolHomeRepository.findById(id);
      } catch (error) {
          throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
  }

    async update(id: string, update: UpdateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
        try {
            const spmpData = this.transformUpdateDtoToSpmp(update);
            return await this.spmPreSchoolHomeRepository.update(id, spmpData);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
        try {
            return await this.spmPreSchoolHomeRepository.delete(id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}