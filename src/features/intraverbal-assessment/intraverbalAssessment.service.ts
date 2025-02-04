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

      const animalSoundsScore = calculateGroupScore(data.animalSounds);
      const namesScore = calculateGroupScore(data.names);
      const simpleQuestionsPartOneScore = calculateGroupScore(data.simpleQuestionsPartOne);
      const simpleQuestionsPartTwoScore = calculateGroupScore(data.simpleQuestionsPartTwo);
      const categoriesScore = calculateGroupScore(data.categories);
      const adjectivesScore = calculateGroupScore(data.adjectives);
      const multipleQuestionsPartOneScore = calculateGroupScore(data.multipleQuestionsPartOne);
      const multipleQuestionsPartTwoScore = calculateGroupScore(data.multipleQuestionsPartTwo);

      return {
          ...data,
          animalSounds: { ...data.animalSounds, subtotalPointsGroup1: animalSoundsScore },
          names: { ...data.names, subtotalPointsGroup2: namesScore },
          simpleQuestionsPartOne: { ...data.simpleQuestionsPartOne, subtotalPointsGroup3: simpleQuestionsPartOneScore },
          simpleQuestionsPartTwo: { ...data.simpleQuestionsPartTwo, subtotalPointsGroup4: simpleQuestionsPartTwoScore },
          categories: { ...data.categories, subtotalPointsGroup5: categoriesScore },
          adjectives: { ...data.adjectives, subtotalPointsGroup6: adjectivesScore },
          multipleQuestionsPartOne: { ...data.multipleQuestionsPartOne, subtotalPointsGroup7: multipleQuestionsPartOneScore },
          multipleQuestionsPartTwo: { ...data.multipleQuestionsPartTwo, subtotalPointsGroup8: multipleQuestionsPartTwoScore },
      };
  }

 private calculateScoreAndClassification(assessment: IIntraverbalAssessmentEntity): IIntraverbalAssessment {
      if (!assessment) {
          throw new HttpException({ message: "Assessment not found" }, HttpStatus.NOT_FOUND);
      }

      const grupo1Score = assessment.animalSounds?.subtotalPointsGroup1 || 0;
      const grupo2Score = assessment.names?.subtotalPointsGroup2 || 0;
      const grupo3Score = assessment.simpleQuestionsPartOne?.subtotalPointsGroup3 || 0;
      const grupo4Score = assessment.simpleQuestionsPartTwo?.subtotalPointsGroup4 || 0;
      const grupo5Score = assessment.categories?.subtotalPointsGroup5 || 0;
      const grupo6Score = assessment.adjectives?.subtotalPointsGroup6 || 0;
      const grupo7Score = assessment.multipleQuestionsPartOne?.subtotalPointsGroup7 || 0;
      const grupo8Score = assessment.multipleQuestionsPartTwo?.subtotalPointsGroup8 || 0;

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