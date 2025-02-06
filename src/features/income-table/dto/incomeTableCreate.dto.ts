import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class incomeTablesPartOneDTO {
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  recognizesAndIdentifiesLetters: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  recognizesAndIdentifiesNumbers: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  directedWriting: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  spontaneousWriting: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  readingAndWriting: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  readingAndComprehension: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  textProductionRecord: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  textualStructuring: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  oralTextProduction: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  numbersGreaterMagnitude: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  problemSolving: string;
}

class incomeTablesPartTwoDTO {
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  bodyScheme: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  sidePointing: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  position: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  direction: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  space: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  size: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  quantity: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  shape: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  visualDiscrimination: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  hearingDiscrimination: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  verbalizationOfWords: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  synthesisAnalysis: string;

  
  @ApiProperty()
  @IsOptional()
  @IsString()
  fineMotorCoordination: string;
}

export class CreateTableDto {
  @ApiProperty()
  @IsString()
  patient: string;

  @ApiProperty()
  @IsString()
  doctor: string;

  @ApiProperty()
  @IsString()
  date: string;

  @ValidateNested()
  @Type(() => incomeTablesPartOneDTO)
  @ApiProperty({ type: incomeTablesPartOneDTO })
  incomeTablesPartOne: incomeTablesPartOneDTO;

  @ValidateNested()
  @Type(() => incomeTablesPartTwoDTO)
  @ApiProperty({ type: incomeTablesPartTwoDTO })
  incomeTablesPartTwo: incomeTablesPartTwoDTO;
}
