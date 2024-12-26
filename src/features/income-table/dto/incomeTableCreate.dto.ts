import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChooseIncomeTableDTO {
    @IsNotEmpty()
    @ApiProperty()
    optionYes: string;

    @IsNotEmpty()
    @ApiProperty()
    optionNo: string;

    @IsNotEmpty()
    @ApiProperty()
    optinoInDevelopment: string;
  }

  class incomeTablesPartOneDTO {
    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    recognizesAndIdentifiesLetters: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    recognizesAndIdentifiesNumbers: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
		directedWriting: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    spontaneousWriting: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    readingAndWriting: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    readingAndUnderstanding: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    textProductionRegistration: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    textualStructuring: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    oralTextProduction: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    largerNumbers: string;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    troubleshooting: string;

}

class incomeTablesPartTwoDTO {
  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  bodyScheme: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  sidePointing: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  position: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  direction: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  space: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  size: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  quantity: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  shape: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  visualDiscrimination: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  hearingDiscrimination: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  verbalizationOfWords: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  synthesisAnalysis: string;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  fineMotorCoordination: string;
}

  export class CreateTableDto {
    @ValidateNested()
    @Type(() => incomeTablesPartOneDTO)
    @ApiProperty({ type: incomeTablesPartOneDTO })
    GroupA: incomeTablesPartOneDTO;
	
	@ValidateNested()
    @Type(() => incomeTablesPartTwoDTO)
    @ApiProperty({ type: incomeTablesPartTwoDTO })
    incomeTablesPartTwo: incomeTablesPartTwoDTO;
  
  }