import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChooseScaleAsrsDTO {
    @IsNotEmpty()
    @ApiProperty()
    optionOne: number;

    @IsNotEmpty()
    @ApiProperty()
    optionTwo: number;

    @IsNotEmpty()
    @ApiProperty()
    optionThree: number;

    @IsNotEmpty()
    @ApiProperty()
    optionFour: number;

    @IsNotEmpty()
    @ApiProperty()
    optionFive: number;
  }

  class GroupADTO {
    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionOne: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionTwo: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionThree: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionFour: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionFive: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionSix: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionSeven: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionEight: ChooseScaleAsrsDTO;

}

class GroupBDTO {
    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionOne: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionTwo: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionThree: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionFour: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionFive: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionSix: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionSeven: ChooseScaleAsrsDTO;

    @ValidateNested()
    @Type(() => ChooseScaleAsrsDTO)
    @ApiProperty({ type: ChooseScaleAsrsDTO })
    questionEight: ChooseScaleAsrsDTO;
}

  export class CreateScaleAsrsDTO {
    @ValidateNested()
    @Type(() => GroupADTO)
    @ApiProperty({ type: GroupADTO })
    GroupA: GroupADTO;
	
	@ValidateNested()
    @Type(() => GroupBDTO)
    @ApiProperty({ type: GroupBDTO })
    GroupB: GroupBDTO;
  
  }