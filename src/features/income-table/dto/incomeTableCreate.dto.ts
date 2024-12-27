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
    recognizesAndIdentifiesNumbers: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
		directedWriting: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    spontaneousWriting: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    readingAndWriting: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    readingAndUnderstanding: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    textProductionRegistration: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    textualStructuring: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    oralTextProduction: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    largerNumbers: ChooseIncomeTableDTO;

    @ValidateNested()
    @Type(() => ChooseIncomeTableDTO)
    @ApiProperty({ type: ChooseIncomeTableDTO })
    troubleshooting: ChooseIncomeTableDTO;

}

class incomeTablesPartTwoDTO {
  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  bodyScheme: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  sidePointing: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  position: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  direction: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  space: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  size: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  quantity: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  shape: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  visualDiscrimination: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  hearingDiscrimination: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  verbalizationOfWords: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  synthesisAnalysis: ChooseIncomeTableDTO;

  @ValidateNested()
  @Type(() => ChooseIncomeTableDTO)
  @ApiProperty({ type: ChooseIncomeTableDTO })
  fineMotorCoordination: ChooseIncomeTableDTO;
}

  export class CreateTableDto {
    @ValidateNested()
    @Type(() => incomeTablesPartOneDTO)
    @ApiProperty({ type: incomeTablesPartOneDTO })
    GroupA: incomeTablesPartOneDTO;
	
	@ValidateNested()
    @Type(() => incomeTablesPartTwoDTO)
    @ApiProperty({ type: incomeTablesPartTwoDTO })
    GroupB: incomeTablesPartTwoDTO;
  
  }