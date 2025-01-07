import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
 

 export class DevelopmentSocioCulturalDto{

    @ApiProperty()
    @IsOptional()
    @IsString()
    relationshipWithParents: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    relationshipWithAdults: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    relationshipWithOtherChildren: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whoAreYourBestFriends: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whatLikes: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    muchChargedToSpeakCorrectly: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    familyWithSpeechDifficulty: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    difficultyOfUnderstanding: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hasVisualContact: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bitesOtherChildrenAggressive: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    communicationInitiative: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    maintainsDialogue: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hasContactWithWhatLikes: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    doesntLike: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hasGoodSchoolPerformance: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whenStartedSchool: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hadGoodAdaptation: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    howIsTheirBehavior: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    answersByName: string;
}

