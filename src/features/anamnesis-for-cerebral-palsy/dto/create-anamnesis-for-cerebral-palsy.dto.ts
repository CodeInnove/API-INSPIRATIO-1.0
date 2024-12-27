import { ApiProperty } from "@nestjs/swagger";
import {  IsOptional, IsString } from "class-validator";
import { DevelopmentMotorDto } from "./create-anamnesis-development.dto";
import { FoodsDto } from "./create-anamnesis-foods.dto";

export class CreateAfcpDto {
        @ApiProperty()
        @IsOptional()
        @IsString()
        relevantEvents?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        useOfMedications?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        generalPsychologicalState?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        generalHealth?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        birthGeneralConditions?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        birthConditionsOfChild?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        didTheBabyCryRightAway?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        coloration?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        wasTheBabyInTheIncubator?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        howLongAndWhyInIncubator?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        didTheBabyHaveFeedingProblemsInitially?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        whichFeedingProblems?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        specialMedicalObservationsAndRecommendations?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        childsReleaseTimeAfterBirth?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        planning2WasDesiredOrNot?: string;
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        howDidItTranspire?: string;

        @ApiProperty({ type: DevelopmentMotorDto })
        @IsOptional()
        developmentMotor: DevelopmentMotorDto

        @ApiProperty({type: FoodsDto})
        @IsOptional()
        foods: FoodsDto
};


