import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasurePreschoolDto, ScoreDto } from './dto/createSensoryProcessingMeasurePreschool.dto';
import { SpmPreSchoolHomeRepository } from './sensoryProcessingMeasurePreSchoolHome.repository';
import { ISensoryProcessingMeasurePreschoolEntity } from 'src/entities/sensoryProcessingMeasurePreschoolHome.entity';
import { UpdateSensoryProcessingMeasurePreschoolDto } from './dto/updateSensoryProcessingMeasurePreschool.dto';
import { QuerySpmPreSchoolHomeDto } from './dto/querySensoryProcessingMeasurePreschool.dto';


@Injectable()
export class SensoryProcessingMeasurePreschoolService {
    constructor(
        private readonly spmPreSchoolHomeRepository: SpmPreSchoolHomeRepository,
    ) { }

      private scoreMap = { 'N': 1, 'O': 2, 'F': 3, 'S': 4 };
     
         private calculateScoresSpmHome(data: CreateSensoryProcessingMeasurePreschoolDto | UpdateSensoryProcessingMeasurePreschoolDto): ScoreDto {
             const scores: ScoreDto = {
                 SOC: 0, VIS: 0, HEA: 0, TOU: 0, ITEMS: 0, BOD: 0, BAL: 0, PLA: 0
             };
     
             const sumScores = (category: keyof ScoreDto, values: any) => {
                 if (values) {
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
     
             return scores;
         }
     
         private transformPropertiesSpmSchool<T>(obj: Record<string, any> | undefined): T | undefined {
             if (!obj) return undefined;
     
             const transformed: Record<string, 'N' | 'O' | 'F' | 'S'> = {};
             for (const key in obj) {
                 if (obj.hasOwnProperty(key) && typeof obj[key] === 'string' && ['N', 'O', 'F', 'S'].includes(obj[key])) {
                     transformed[key] = obj[key] as 'N' | 'O' | 'F' | 'S';
                 }
             }
             return transformed as T;
         }
     
         private transformDtoToSpmHomePreSchool(data: CreateSensoryProcessingMeasurePreschoolDto): CreateSensoryProcessingMeasurePreschoolDto {
             const scores = this.calculateScoresSpmHome(data);
     
             return {
                 ...data,
                 scores,
                 participationSocialPreSchool: this.transformPropertiesSpmSchool(data.participationSocialPreSchool),
                 visionPreSchool: this.transformPropertiesSpmSchool(data.visionPreSchool),
                 hearingPreSchool: this.transformPropertiesSpmSchool(data.hearingPreSchool),
                 touchPreSchool: this.transformPropertiesSpmSchool(data.touchPreSchool),
                 smellAndTastePreSchool: this.transformPropertiesSpmSchool(data.smellAndTastePreSchool),
                 bodyAwarenessPreSchool: this.transformPropertiesSpmSchool(data.bodyAwarenessPreSchool),
                 balanceAndMovementPreSchool: this.transformPropertiesSpmSchool(data.balanceAndMovementPreSchool),
                 planningAndIdeationPreSchool: this.transformPropertiesSpmSchool(data.planningAndIdeationPreSchool),
             };
         }


    async create(data: CreateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
        try {
            const spmpData = this.transformDtoToSpmHomePreSchool(data);
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
           //  Buscar os dados atuais no banco para preencher valores ausentes
                         const existingRecord = await this.spmPreSchoolHomeRepository.findById(id);
                         if (!existingRecord) {
                             throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
                         }
                 
                         //  Garantir que as propriedades obrigatórias sempre tenham um valor
                         const completeUpdate: CreateSensoryProcessingMeasurePreschoolDto = {
                             ...existingRecord.toObject(), // Mantém os valores atuais do banco
                             ...update, // Substitui apenas os campos enviados na atualização
                         };
                 
                         // Transformar os dados e atualizar no banco
                         const spmpData = this.transformDtoToSpmHomePreSchool(completeUpdate);
                         const updatedRecord = await this.spmPreSchoolHomeRepository.update(id, spmpData);
                 
                         return updatedRecord.toObject();
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