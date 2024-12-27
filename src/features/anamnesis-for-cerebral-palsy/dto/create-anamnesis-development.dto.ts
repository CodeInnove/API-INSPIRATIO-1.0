import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
 
export class DevelopmentMotorDto {
            @ApiProperty()
            @IsOptional()
            @IsString()
            headControlCurrent?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            sittingInitialPhase?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            sittingWithSupport?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            sittingWithoutSupport?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            sittingCurrently?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            crawling?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            gettingOnAllFoursAndCrawling?: string;
             @ApiProperty()
            @IsOptional()
            @IsString()
            standingBalancePrevious?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            standingBalanceCurrent?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            walkingInitial?: string;
             @ApiProperty()
            @IsOptional()
            @IsString()
             walkingCurrently?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            coordinationOfMovementsInGrossAndFineMotorActivities?: string;
            @ApiProperty()
            @IsOptional()
            @IsString()
            conditionsOfSelfStimulationAndExplorationOfTheEnvironmentAndObjects?: string;
}