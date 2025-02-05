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
        const scores: ScoreHomeDto = {
            SOC: 0, VIS: 0, HEA: 0, TOU: 0, ITEMS: 0, BOD: 0, BAL: 0, PLA: 0
        };

        const sumScores = (category: keyof ScoreHomeDto, values: any) => {
            if (values) {
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

        return scores;
    }

    private transformPropertiesSpmHome<T>(obj: Record<string, any> | undefined): T | undefined {
        if (!obj) return undefined;

        const transformed: Record<string, 'N' | 'O' | 'F' | 'S'> = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && typeof obj[key] === 'string' && ['N', 'O', 'F', 'S'].includes(obj[key])) {
                transformed[key] = obj[key] as 'N' | 'O' | 'F' | 'S';
            }
        }
        return transformed as T;
    }

    private transformDtoToSpmHome(data: CreateSensoryProcessingMeasureHomeDto): CreateSensoryProcessingMeasureHomeDto {
        const scoresHome = this.calculateScoresSpmHome(data);

        return {
            ...data,
            scoresHome,
            participationSocial: this.transformPropertiesSpmHome(data.participationSocial),
            vision: this.transformPropertiesSpmHome(data.vision),
            hearing: this.transformPropertiesSpmHome(data.hearing),
            touch: this.transformPropertiesSpmHome(data.touch),
            smellAndTaste: this.transformPropertiesSpmHome(data.smellAndTaste),
            bodyAwareness: this.transformPropertiesSpmHome(data.bodyAwareness),
            balanceAndMovement: this.transformPropertiesSpmHome(data.balanceAndMovement),
            planningAndIdeation: this.transformPropertiesSpmHome(data.planningAndIdeation),
        };
    }

    async create(data: CreateSensoryProcessingMeasureHomeDto): Promise<ISpmHomeEntity> {
        try {
            const spmpData = this.transformDtoToSpmHome(data);
            const createdRecord = await this.spmPreSchoolHomeRepository.create(spmpData);

            return createdRecord.toObject(); //  Corrigido para retornar um documento Mongoose válido
        } catch (error) {
            throw new HttpException(error.message || 'Erro ao criar registro', HttpStatus.BAD_REQUEST);
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
        //  Buscar os dados atuais no banco para preencher valores ausentes
        const existingRecord = await this.spmPreSchoolHomeRepository.findById(id);
        if (!existingRecord) {
            throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
        }

        //  Garantir que as propriedades obrigatórias sempre tenham um valor
        const completeUpdate: CreateSensoryProcessingMeasureHomeDto = {
            ...existingRecord.toObject(), // Mantém os valores atuais do banco
            ...update, // Substitui apenas os campos enviados na atualização
        };

        // Transformar os dados e atualizar no banco
        const spmpData = this.transformDtoToSpmHome(completeUpdate);
        const updatedRecord = await this.spmPreSchoolHomeRepository.update(id, spmpData);

        return updatedRecord.toObject();
    } catch (error) {
        throw new HttpException(error.message || 'Erro ao atualizar registro', HttpStatus.BAD_REQUEST);
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