import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureSchoolPreschoolDto, ScoreSchoolPreSchoolDto } from './dto/createSensoryProcessingMeasureSchoolPreSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/updateSensoryProcessingMeasureSchoolPreSchool.dto';
import { SpmSchoolPreSchoolRepository } from './sensoryProcessingMeasureSchoolPreSchool.repository';
import { ISensoryProcessingMeasureSchoolPreSchoolEntity } from 'src/entities/sensoryProcessingMeasureSchoolPreSchool.entity';
import { QuerySpmSchoolPreSchoolDto } from './dto/querySensoryProcessingMeasureSchoolPreSchool.dto';

@Injectable()
export class SensoryProcessingMeasureSchoolPreschoolService {
  constructor(
    private readonly spmSchoolPreSchoolRepository: SpmSchoolPreSchoolRepository
  ) {}

  private scoreMap = { 'N': 1, 'O': 2, 'F': 3, 'S': 4 };
    
        private calculateScoresSpmSchoolPreSchool(data: CreateSensoryProcessingMeasureSchoolPreschoolDto | UpdateSensoryProcessingMeasureSchoolPreschoolDto): ScoreSchoolPreSchoolDto {
            const scores: ScoreSchoolPreSchoolDto = {
                SOC: 0, VIS: 0, HEA: 0, TOU: 0, ITEMS: 0, BOD: 0, BAL: 0, PLA: 0
            };
    
            const sumScores = (category: keyof ScoreSchoolPreSchoolDto, values: any) => {
                if (values) {
                    for (const key in values) {
                        if (typeof values[key] === 'string') {
                            scores[category] += this.scoreMap[values[key]] || 0;
                        }
                    }
                }
            };
    
            sumScores('SOC', data.participationSocialSpmsps);
            sumScores('VIS', data.visionSpmsps);
            sumScores('HEA', data.hearingSpmsps);
            sumScores('TOU', data.touchSpmsps);
            sumScores('ITEMS', data.smellAndTasteSpmsps);
            sumScores('BOD', data.bodyAwarenessSpmsps);
            sumScores('BAL', data.balanceAndMovementSpmsps);
            sumScores('PLA', data.planningAndIdeationSpmsps);
    
            return scores;
        }
    
        private transformPropertiesSpmSchoolPreSchool<T>(obj: Record<string, any> | undefined): T | undefined {
            if (!obj) return undefined;
    
            const transformed: Record<string, 'N' | 'O' | 'F' | 'S'> = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key) && typeof obj[key] === 'string' && ['N', 'O', 'F', 'S'].includes(obj[key])) {
                    transformed[key] = obj[key] as 'N' | 'O' | 'F' | 'S';
                }
            }
            return transformed as T;
        }
    
        private transformDtoToSpmSchool(data: CreateSensoryProcessingMeasureSchoolPreschoolDto): CreateSensoryProcessingMeasureSchoolPreschoolDto {
            const scoresSchoolPreSchool = this.calculateScoresSpmSchoolPreSchool(data);
    
            return {
                ...data,
                scoresSchoolPreSchool,
                participationSocialSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.participationSocialSpmsps),
                visionSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.visionSpmsps),
                hearingSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.hearingSpmsps),
                touchSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.touchSpmsps),
                smellAndTasteSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.smellAndTasteSpmsps),
                bodyAwarenessSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.bodyAwarenessSpmsps),
                balanceAndMovementSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.balanceAndMovementSpmsps),
                planningAndIdeationSpmsps: this.transformPropertiesSpmSchoolPreSchool(data.planningAndIdeationSpmsps),
            };
        }

  async create(data: CreateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
      const spmpData = this.transformDtoToSpmSchool(data);
      const createdRecord = await this.spmSchoolPreSchoolRepository.create(spmpData);

          return createdRecord.toObject(); //  Corrigido para retornar um documento Mongoose válido
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QuerySpmSchoolPreSchoolDto) {
    try {
      return await this.spmSchoolPreSchoolRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
      return await this.spmSchoolPreSchoolRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
     //  Buscar os dados atuais no banco para preencher valores ausentes
     const existingRecord = await this.spmSchoolPreSchoolRepository.findById(id);
     if (!existingRecord) {
         throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
     }

     //  Garantir que as propriedades obrigatórias sempre tenham um valor
     const completeUpdate: CreateSensoryProcessingMeasureSchoolPreschoolDto = {
         ...existingRecord.toObject(), // Mantém os valores atuais do banco
         ...update, // Substitui apenas os campos enviados na atualização
     };

     // Transformar os dados e atualizar no banco
     const spmpData = this.transformDtoToSpmSchool(completeUpdate);
     const updatedRecord = await this.spmSchoolPreSchoolRepository.update(id, spmpData);

     return updatedRecord.toObject();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    try {
      return await this.spmSchoolPreSchoolRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
