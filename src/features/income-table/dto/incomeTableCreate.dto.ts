import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


  class incomeTablesPartOneDTO {
    
    @ApiProperty()
    recognizesAndIdentifiesLetters: string;

    @ApiProperty()
    recognizesAndIdentifiesNumbers: string;

    @ApiProperty()
		directedWriting: string;

    @ApiProperty()
    spontaneousWriting: string;

    @ApiProperty()
    readingAndWriting: string;

    @ApiProperty()
    readingAndUnderstanding: string;

    @ApiProperty()
    textProductionRegistration: string;

    @ApiProperty()
    textualStructuring: string;

    @ApiProperty()
    oralTextProduction: string;

    @ApiProperty()
    largerNumbers: string;

    @ApiProperty()
    troubleshooting: string;

}

class incomeTablesPartTwoDTO {
  @ApiProperty()
  bodyScheme: string;

  @ApiProperty()
  sidePointing: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  direction: string;

  @ApiProperty()
  space: string;

  @ApiProperty()
  size: string;

  @ApiProperty()
  quantity: string;

  @ApiProperty()
  shape: string;

  @ApiProperty()
  visualDiscrimination: string;

  @ApiProperty()
  hearingDiscrimination: string;
  
  @ApiProperty()
  verbalizationOfWords: string;

  @ApiProperty()
  synthesisAnalysis: string;

  @ApiProperty()
  fineMotorCoordination: string;
}

  export class CreateTableDto {
    @ApiProperty()
    @IsString()
    patient: string

    @ApiProperty()
    @IsString()
    doctor: string


    @ValidateNested()
    @Type(() => incomeTablesPartOneDTO)
    @ApiProperty({ type: incomeTablesPartOneDTO })
    GroupA: incomeTablesPartOneDTO;
	
	@ValidateNested()
    @Type(() => incomeTablesPartTwoDTO)
    @ApiProperty({ type: incomeTablesPartTwoDTO })
    GroupB: incomeTablesPartTwoDTO;
  
  }