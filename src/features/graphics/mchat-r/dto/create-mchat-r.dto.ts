import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';


class MchatRDtoFailPass {
    @IsNotEmpty()
    @ApiProperty()
    fail_pass: string;

    @IsNotEmpty()
    @ApiProperty()
    socre: number;
}

class Question1Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question1: MchatRDtoFailPass;
}

class Question2Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question2: MchatRDtoFailPass;
}
class Question3Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question3: MchatRDtoFailPass;
}
class Question4Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question4: MchatRDtoFailPass;
}
class Question5Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question5: MchatRDtoFailPass;
}
class Question6Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question6: MchatRDtoFailPass;
}
class Question7Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question7: MchatRDtoFailPass;
}
class Question8Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question8: MchatRDtoFailPass;
}
class Question9Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question9: MchatRDtoFailPass;
}

class Question10Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question10: MchatRDtoFailPass;
}

class Question11Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question11: MchatRDtoFailPass;
}

class Question12Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question12: MchatRDtoFailPass;
}

class Question13Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question13: MchatRDtoFailPass;
}
class Question14Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question14: MchatRDtoFailPass;
}
class Question15Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question15: MchatRDtoFailPass;
}
class Question16Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question16: MchatRDtoFailPass;
}
class Question17Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question17: MchatRDtoFailPass;
}
class Question18Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question18: MchatRDtoFailPass;
}
class Question19Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question19: MchatRDtoFailPass;
}
class Question20Dto {
    @ValidateNested()
    @Type(() => MchatRDtoFailPass)
    @ApiProperty({ type: MchatRDtoFailPass })
    question20: MchatRDtoFailPass;
}

export class TotalDto{
    @ValidateNested()
    @Type(() => Question1Dto)
    @ApiProperty({ type: Question1Dto })
    question1: Question1Dto;

    @ValidateNested()
    @Type(() => Question2Dto)
    @ApiProperty({ type: Question1Dto })
    question2: Question2Dto;

    @ValidateNested()
    @Type(() => Question3Dto)
    @ApiProperty({ type: Question1Dto })
    question3: Question3Dto;

    @ValidateNested()
    @Type(() => Question4Dto)
    @ApiProperty({ type: Question1Dto })
    question4: Question4Dto;

    @ValidateNested()
    @Type(() => Question5Dto)
    @ApiProperty({ type: Question1Dto })
    question5: Question5Dto;

    @ValidateNested()
    @Type(() => Question6Dto)
    @ApiProperty({ type: Question1Dto })
    question6: Question6Dto;


    @ValidateNested()
    @Type(() => Question7Dto)
    @ApiProperty({ type: Question1Dto })
    question7: Question7Dto;

    @ValidateNested()
    @Type(() => Question8Dto)
    @ApiProperty({ type: Question1Dto })
    question8: Question8Dto;


    @ValidateNested()
    @Type(() => Question9Dto)
    @ApiProperty({ type: Question1Dto })
    question9: Question9Dto;


    @ValidateNested()
    @Type(() => Question10Dto)
    @ApiProperty({ type: Question1Dto })
    question10: Question10Dto;


    @ValidateNested()
    @Type(() => Question11Dto)
    @ApiProperty({ type: Question1Dto })
    question11: Question11Dto;


    @ValidateNested()
    @Type(() => Question12Dto)
    @ApiProperty({ type: Question1Dto })
    question12: Question12Dto;


    @ValidateNested()
    @Type(() => Question13Dto)
    @ApiProperty({ type: Question1Dto })
    question13: Question13Dto;


    @ValidateNested()
    @Type(() => Question14Dto)
    @ApiProperty({ type: Question1Dto })
    question14: Question14Dto;


    @ValidateNested()
    @Type(() => Question15Dto)
    @ApiProperty({ type: Question1Dto })
    question15: Question15Dto;


    @ValidateNested()
    @Type(() => Question16Dto)
    @ApiProperty({ type: Question1Dto })
    question16: Question16Dto;


    @ValidateNested()
    @Type(() => Question17Dto)
    @ApiProperty({ type: Question1Dto })
    question17: Question17Dto;


    @ValidateNested()
    @Type(() => Question18Dto)
    @ApiProperty({ type: Question1Dto })
    question18: Question18Dto;


    @ValidateNested()
    @Type(() => Question19Dto)
    @ApiProperty({ type: Question1Dto })
    question19: Question19Dto;


    @ValidateNested()
    @Type(() => Question20Dto)
    @ApiProperty({ type: Question1Dto })
    question20: Question20Dto;
}
