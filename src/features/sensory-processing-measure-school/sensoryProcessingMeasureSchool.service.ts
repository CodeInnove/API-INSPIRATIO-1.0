import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSensoryProcessingMeasureSchoolDto, ScoreSchoolDto } from './dto/createSensoryProcessingMeasureSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolDto } from './dto/updateSensoryProcessingMeasureSchool.dto';
import { ISensoryProcessingMeasureSchoolEntity } from 'src/entities/sensoryProcessingMeasureSchool.entity';
import { SpmSchoolRepository } from './sensoryProcessingMeasureSchool.repository';
import { QuerySpmSchoolDto } from './dto/querySensoryProcessingMeasureSchool.dto';

@Injectable()
export class SensoryProcessingMeasureSchoolService {
  constructor(
    private readonly spmSchoolRepository: SpmSchoolRepository
  ) {}

   private scoreMap = { 'N': 1, 'O': 2, 'F': 3, 'S': 4 };
  
      private calculateScoresSpmHome(data: CreateSensoryProcessingMeasureSchoolDto | UpdateSensoryProcessingMeasureSchoolDto): ScoreSchoolDto {
          const scores: ScoreSchoolDto = {
              SOC: 0, VIS: 0, HEA: 0, TOU: 0, ITEMS: 0, BOD: 0, BAL: 0, PLA: 0
          };
  
          const sumScores = (category: keyof ScoreSchoolDto, values: any) => {
              if (values) {
                  for (const key in values) {
                      if (typeof values[key] === 'string') {
                          scores[category] += this.scoreMap[values[key]] || 0;
                      }
                  }
              }
          };
  
          sumScores('SOC', data.participationSocialSchool);
          sumScores('VIS', data.visionSchool);
          sumScores('HEA', data.hearingSchool);
          sumScores('TOU', data.touchSchool);
          sumScores('ITEMS', data.smellAndTasteSchool);
          sumScores('BOD', data.bodyAwarenessSchool);
          sumScores('BAL', data.balanceAndMovementSchool);
          sumScores('PLA', data.planningAndIdeationSchool);
  
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
  
      private transformDtoToSpmSchool(data: CreateSensoryProcessingMeasureSchoolDto): CreateSensoryProcessingMeasureSchoolDto {
          const scoresSchool = this.calculateScoresSpmHome(data);
  
          return {
              ...data,
              scoresSchool,
              participationSocialSchool: this.transformPropertiesSpmSchool(data.participationSocialSchool),
              visionSchool: this.transformPropertiesSpmSchool(data.visionSchool),
              hearingSchool: this.transformPropertiesSpmSchool(data.hearingSchool),
              touchSchool: this.transformPropertiesSpmSchool(data.touchSchool),
              smellAndTasteSchool: this.transformPropertiesSpmSchool(data.smellAndTasteSchool),
              bodyAwarenessSchool: this.transformPropertiesSpmSchool(data.bodyAwarenessSchool),
              balanceAndMovementSchool: this.transformPropertiesSpmSchool(data.balanceAndMovementSchool),
              planningAndIdeationSchool: this.transformPropertiesSpmSchool(data.planningAndIdeationSchool),
          };
      }

  async create(data: CreateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
          const spmpData = this.transformDtoToSpmSchool(data);
          const createdRecord = await this.spmSchoolRepository.create(spmpData);

          return createdRecord.toObject(); //  Corrigido para retornar um documento Mongoose válido
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: QuerySpmSchoolDto)  {
    try {
      return await this.spmSchoolRepository.findAll(query);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
      return await this.spmSchoolRepository.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, update: UpdateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
      //  Buscar os dados atuais no banco para preencher valores ausentes
              const existingRecord = await this.spmSchoolRepository.findById(id);
              if (!existingRecord) {
                  throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
              }
      
              //  Garantir que as propriedades obrigatórias sempre tenham um valor
              const completeUpdate: CreateSensoryProcessingMeasureSchoolDto = {
                  ...existingRecord.toObject(), // Mantém os valores atuais do banco
                  ...update, // Substitui apenas os campos enviados na atualização
              };
      
              // Transformar os dados e atualizar no banco
              const spmpData = this.transformDtoToSpmSchool(completeUpdate);
              const updatedRecord = await this.spmSchoolRepository.update(id, spmpData);
      
              return updatedRecord.toObject();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    try {
      return await this.spmSchoolRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
