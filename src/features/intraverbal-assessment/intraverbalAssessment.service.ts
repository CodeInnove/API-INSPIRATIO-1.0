import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IntraverbalAssessmentRepository } from "./intraverbalAssessment.repository";
import { CreateIntraverbalAssessmentDto } from "./dto/intraverbalAssessmentCreate.dto";
import { IIntraverbalAssessmentEntity } from "src/entities/intraverbalAssessment.entity";
import { UpdateIntraverbalAssessmentDto } from "./dto/intraverbalAssessmentUpdate.dto";
import { IIntraverbalAssessment } from "./types/intraverbalAssessment";
import { IAnimalSounds } from "./dto/createIatGroupOne.dto";
import { INames } from "./dto/createIatGroupTwo.dto";
import { ISimpleQuestionsPartOne } from "./dto/createIatGroupThree.dto";
import { ISimpleQuestionsPartTwo } from "./dto/createIatGroupFour.dto";
import { ICategories } from "./dto/createIatGroupFive.dto";
import { IAdjectives } from "./dto/createIatGroupSix.dto";
import { IMultipleQuestionsPartOne } from "./dto/createIatGroupSeven.dto";
import { IMultipleQuestionsPartTwo } from "./dto/createIatGroupEight.dto";


type DataWithSubtotals = CreateIntraverbalAssessmentDto & {
  group1?: IAnimalSounds & { subtotalPointsGroup1?: number };
  group2?: INames & { subtotalPointsGroup2?: number };
  group3?: ISimpleQuestionsPartOne & { subtotalPointsGroup3?: number };
  group4?: ISimpleQuestionsPartTwo & { subtotalPointsGroup4?: number };
  group5?: ICategories & { subtotalPointsGroup5?: number };
  group6?: IAdjectives & { subtotalPointsGroup6?: number };
  group7?: IMultipleQuestionsPartOne & { subtotalPointsGroup7?: number };
  group8?: IMultipleQuestionsPartTwo & { subtotalPointsGroup8?: number };
};

@Injectable()
export class IntraverbalAssessmentService {
  constructor(
    private readonly intraverbalAssessmentRepository: IntraverbalAssessmentRepository
  ) {}

  async create(data: CreateIntraverbalAssessmentDto): Promise<IIntraverbalAssessmentEntity> {
    try {
     
        return await this.intraverbalAssessmentRepository.create(data);
    } catch (error) {
        throw new HttpException(
            { message: error.message },
            HttpStatus.BAD_REQUEST,
        );
    }
}
  
    async findAll() {
      try {
        return this.intraverbalAssessmentRepository.findAll();
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
  
    async findById(id: string): Promise<IIntraverbalAssessmentEntity> {
      try {
        return this.intraverbalAssessmentRepository.findById(id);
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    async update(id: string, data: UpdateIntraverbalAssessmentDto): Promise<IIntraverbalAssessmentEntity> {
      try {
        return this.intraverbalAssessmentRepository.update(id, data);
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    async delete(id: string): Promise<IIntraverbalAssessmentEntity> {
      try {
        return this.intraverbalAssessmentRepository.delete(id);
      } catch (error) {
        throw new HttpException(
          { message: error.message },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    private calculateSubtotalPoints(data: CreateIntraverbalAssessmentDto | UpdateIntraverbalAssessmentDto) {
      const calculateGroupScore = (group: any): number => {
          if (!group) return 0;

          let total = 0;
          for (const key in group) {
              if (key.endsWith('Score')) {
                  const scoreValue = group[key];
                  if (typeof scoreValue === 'string') {
                      const normalizedScore = scoreValue.toLowerCase();
                      if (normalizedScore === 'sim') {
                          total += 1;
                      } else if (normalizedScore === 'não' || normalizedScore === 'nao') {
                          total += 0;
                      }
                  } else if (typeof scoreValue === 'number') {
                      total += scoreValue;
                  }
              }
          }
          return total;
      };

      const group1Score = calculateGroupScore(data.group1);
      const group2Score = calculateGroupScore(data.group2);
      const group3Score = calculateGroupScore(data.group3);
      const group4Score = calculateGroupScore(data.group4);
      const group5Score = calculateGroupScore(data.group5);
      const group6Score = calculateGroupScore(data.group6);
      const group7Score = calculateGroupScore(data.group7);
      const group8Score = calculateGroupScore(data.group8);

      return {
          ...data,
          group1: { ...data.group1, subtotalPointsGroup1: group1Score },
          group2: { ...data.group2, subtotalPointsGroup2: group2Score },
          group3: { ...data.group3, subtotalPointsGroup3: group3Score },
          group4: { ...data.group4, subtotalPointsGroup4: group4Score },
          group5: { ...data.group5, subtotalPointsGroup5: group5Score },
          group6: { ...data.group6, subtotalPointsGroup6: group6Score },
          group7: { ...data.group7, subtotalPointsGroup7: group7Score },
          group8: { ...data.group8, subtotalPointsGroup8: group8Score },
      };
  }

 private calculateScoreAndClassification(assessment: IIntraverbalAssessmentEntity): IIntraverbalAssessment {
      if (!assessment) {
          throw new HttpException({ message: "Assessment not found" }, HttpStatus.NOT_FOUND);
      }

      const grupo1Score = assessment.group1?.subtotalPointsGroup1 || 0;
      const grupo2Score = assessment.group2?.subtotalPointsGroup2 || 0;
      const grupo3Score = assessment.group3?.subtotalPointsGroup3 || 0;
      const grupo4Score = assessment.group4?.subtotalPointsGroup4 || 0;
      const grupo5Score = assessment.group5?.subtotalPointsGroup5 || 0;
      const grupo6Score = assessment.group6?.subtotalPointsGroup6 || 0;
      const grupo7Score = assessment.group7?.subtotalPointsGroup7 || 0;
      const grupo8Score = assessment.group8?.subtotalPointsGroup8 || 0;

      const totalScore =
          grupo1Score +
          grupo2Score +
          grupo3Score +
          grupo4Score +
          grupo5Score +
          grupo6Score +
          grupo7Score +
          grupo8Score;

      let classification: string;

      if (totalScore <= 19) {
          classification = "Comprometimento intraverbal grave.";
      } else if (totalScore <= 39) {
          classification = "Comprometimento intraverbal moderado.";
      } else if (totalScore <= 59) {
          classification = "Comprometimento intraverbal leve.";
      } else {
          classification = "Comportamento intraverbal funcional.";
      }

      return {
          ...assessment,
          totalScore,
          classification,
      };
  }

}