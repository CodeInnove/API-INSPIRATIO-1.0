import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';



  class GroupADto {
    
    @ApiProperty()
    @IsNumber()
    questionOne: number;

    @ApiProperty()
    @IsNumber()
    questionTwo: number;

    @ApiProperty()
    @IsNumber()
    questionThree: number;

    @ApiProperty()
    @IsNumber()
    questionFour: number;

    @ApiProperty()
    @IsNumber()
    questionFive: number;

    @ApiProperty()
    @IsNumber()
    questionSix: number;

    @ApiProperty()
    @IsNumber()
    questionSeven: number;

    @ApiProperty()
    @IsNumber()
    questionEight: number;

}

class GroupBDto {
  @ApiProperty()
  @IsNumber()
  questionOne: number;
  
  @ApiProperty()
  @IsNumber()
  questionTwo: number;
  
  @ApiProperty()
  @IsNumber()
  questionThree: number;
  
  @ApiProperty()
  @IsNumber()
  questionFour: number;
  
  @ApiProperty()
  @IsNumber()
  questionFive: number;

  @ApiProperty()
  @IsNumber()
  questionSix: number;
  
  @ApiProperty()
  @IsNumber()
  questionSeven: number;
  
  @ApiProperty()
  @IsNumber()
  questionEight: number;
}

export class CreateScaleAsrsDto {
  
  @ApiProperty()
  @IsString()
  patient : string;
  
  @ApiProperty()
  @IsString()
  dateOfApplication: string;
  
  @ApiProperty()
  @IsString()
  doctor: string;
  
  @ApiProperty()
  @ValidateNested()
  @Type(() => GroupADto)
  GroupA: GroupADto;
	
  @ApiProperty()
	@ValidateNested()
  @Type(() => GroupBDto)
  GroupB: GroupBDto;
  
}
