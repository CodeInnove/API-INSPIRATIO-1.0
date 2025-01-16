import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class TableDTO {
  @IsNotEmpty()
  @ApiProperty()
  no: string;

  @IsNotEmpty()
  @ApiProperty()
  inDevelopment: string;

  @IsNotEmpty()
  @ApiProperty()
  yes: string;
}
class incomeTablesPartOneDTO {
  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  recognizesAndIdentifiesLetters: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  recognizesAndIdentifiesNumbers: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  directedWriting: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  spontaneousWriting: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  readingAndWriting: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  readingAndUnderstanding: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  textProductionRegistration: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  textualStructuring: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  oralTextProduction: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  largerNumbers: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  troubleshooting: TableDTO;
}

class incomeTablesPartTwoDTO {
  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  bodyScheme: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  sidePointing: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  position: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  direction: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  space: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  size: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  quantity: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  shape: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  visualDiscrimination: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  hearingDiscrimination: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  verbalizationOfWords: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  synthesisAnalysis: TableDTO;

  @ValidateNested()
  @Type(() => TableDTO)
  @ApiProperty({ type: TableDTO })
  fineMotorCoordination: TableDTO;
}

export class CreateTableDto {
  @ApiProperty()
  @IsString()
  patient: string;

  @ApiProperty()
  @IsString()
  doctor: string;

  @ValidateNested()
  @Type(() => incomeTablesPartOneDTO)
  @ApiProperty({ type: incomeTablesPartOneDTO })
  GroupA: incomeTablesPartOneDTO;

  @ValidateNested()
  @Type(() => incomeTablesPartTwoDTO)
  @ApiProperty({ type: incomeTablesPartTwoDTO })
  GroupB: incomeTablesPartTwoDTO;
}
