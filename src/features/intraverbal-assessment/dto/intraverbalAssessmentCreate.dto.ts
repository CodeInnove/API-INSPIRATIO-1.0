import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IAnimalSounds } from './createIatGroupOne.dto';
import { INames } from './createIatGroupTwo.dto';
import { ISimpleQuestionsPartOne } from './createIatGroupThree.dto';
import { ISimpleQuestionsPartTwo } from './createIatGroupFour.dto';
import { ICategories } from './createIatGroupFive.dto';
import { IAdjectives } from './createIatGroupSix.dto';
import { IMultipleQuestionsPartOne } from './createIatGroupSeven.dto';
import { IMultipleQuestionsPartTwo } from './createIatGroupEight.dto';

export class CreateIntraverbalAssessmentDto {

  @ApiProperty()
  @IsString()
  patient: string;

  @ApiProperty()
  @IsString()
  doctor: string;

  /*@ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional() 
  birthDate: Date;*/



  @ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional() 
  date: string | Date;

  @ApiProperty()
  @IsOptional()
  diagonostic: string;

  @ValidateNested()
  @Type(() => IAnimalSounds)
  @ApiProperty({ type: IAnimalSounds })
  animalSounds: IAnimalSounds;

  @ValidateNested()
  @Type(() => INames)
  @ApiProperty({ type: INames })
  names: INames;

  @ValidateNested()
  @Type(() => ISimpleQuestionsPartOne)
  @ApiProperty({ type: ISimpleQuestionsPartOne })
  simpleQuestionsPartOne: ISimpleQuestionsPartOne;

  @ValidateNested()
  @Type(() => ISimpleQuestionsPartTwo)
  @ApiProperty({ type: ISimpleQuestionsPartTwo })
  simpleQuestionsPartTwo: ISimpleQuestionsPartTwo;

  @ValidateNested()
  @Type(() => ICategories)
  @ApiProperty({ type: ICategories })
  categories: ICategories;

  @ValidateNested()
  @Type(() => IAdjectives)
  @ApiProperty({ type: IAdjectives })
  adjectives: IAdjectives;

  @ValidateNested()
  @Type(() => IMultipleQuestionsPartOne)
  @ApiProperty({ type: IMultipleQuestionsPartOne })
  multipleQuestionsPartOne: IMultipleQuestionsPartOne;

  @ValidateNested()
  @Type(() => IMultipleQuestionsPartTwo)
  @ApiProperty({ type: IMultipleQuestionsPartTwo })
  multipleQuestionsPartTwo: IMultipleQuestionsPartTwo;


  @ApiProperty()
  @IsOptional()
  totalScore?: number

  @ApiProperty()
  @IsOptional()
  classification?: string
}
