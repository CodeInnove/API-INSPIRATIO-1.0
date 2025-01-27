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

  @ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional() 
  birthDate: Date;



  @ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional() 
  dataOfApplication: string | Date;

  @ApiProperty()
  @IsOptional()
  diagonostic: string;

  @ValidateNested()
  @Type(() => IAnimalSounds)
  @ApiProperty({ type: IAnimalSounds })
  group1: IAnimalSounds;

  @ValidateNested()
  @Type(() => INames)
  @ApiProperty({ type: INames })
  group2: INames;

  @ValidateNested()
  @Type(() => ISimpleQuestionsPartOne)
  @ApiProperty({ type: ISimpleQuestionsPartOne })
  group3: ISimpleQuestionsPartOne;

  @ValidateNested()
  @Type(() => ISimpleQuestionsPartTwo)
  @ApiProperty({ type: ISimpleQuestionsPartTwo })
  group4: ISimpleQuestionsPartTwo;

  @ValidateNested()
  @Type(() => ICategories)
  @ApiProperty({ type: ICategories })
  group5: ICategories;

  @ValidateNested()
  @Type(() => IAdjectives)
  @ApiProperty({ type: IAdjectives })
  group6: IAdjectives;

  @ValidateNested()
  @Type(() => IMultipleQuestionsPartOne)
  @ApiProperty({ type: IMultipleQuestionsPartOne })
  group7: IMultipleQuestionsPartOne;

  @ValidateNested()
  @Type(() => IMultipleQuestionsPartTwo)
  @ApiProperty({ type: IMultipleQuestionsPartTwo })
  group8: IMultipleQuestionsPartTwo;


  @ApiProperty()
  @IsOptional()
  totalScore?: number

  @ApiProperty()
  @IsOptional()
  classification?: string
}
