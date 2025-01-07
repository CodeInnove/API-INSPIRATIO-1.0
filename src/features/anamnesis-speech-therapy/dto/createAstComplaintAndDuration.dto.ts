import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
 
  
export class IBackgroundDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    gestation: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    typeOfDelivery: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    complications: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    usedMedication: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    medicalGuidance: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whichMedication: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    prenatalCare: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    prenatalCareWhy: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    childProblem: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whichProblem: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    parentsWorkHours: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    childCaregiver: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    weeklyRoutine: string;
}






