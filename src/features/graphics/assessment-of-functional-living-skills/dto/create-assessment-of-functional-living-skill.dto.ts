import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreateTaskDto{
    @ApiProperty()
    @IsNotEmpty()
    totalScore: number;

    @ApiProperty()
    @IsNotEmpty()
    hits: number;
}

class CreateResponseQuestionDto{
    @ApiProperty()
    @IsNotEmpty()
    amount: string;

    @ApiProperty()
    @IsNotEmpty()
    tasks: string;

    @ApiProperty()
    @IsNotEmpty()
    score: number;
}



class CreateBasicLifeDto {
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    selfManagement: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    basicCommunication: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    clothing: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    usingBathroom: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    hygiene: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    bathing: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    healthSafetyFirstAid: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    nightRoutine: CreateResponseQuestionDto
}

class CreateCommunityParticipationDto{
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    basicModality: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    knowledgeCommunity: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    shopping: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    eatingInPublic: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    money: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    time: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    socialAwarenessGoodManners: CreateResponseQuestionDto
}

class CreateDomesticLifeDto{
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    mealsAtHome: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    dishware: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    clothingLaundry: CreateResponseQuestionDto


    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    cleaningTask: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    householdFunctions: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    leisure: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    kitchen: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    cooking: CreateResponseQuestionDto
}

class CreateSchoolsDto{
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    classroomMechanics: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    schoolFood: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    routineAndExpectations: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    socialSkills: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    technology: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    commonKnowledge: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    academicCore: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    academicApplication: CreateResponseQuestionDto
    
}

class CreateVocationalDto{
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    jobSearch: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    interview: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    basicSkills: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    collegeRelations: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    workplaceSafety: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    repairSkills: CreateResponseQuestionDto


    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    careAndCleaning: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    laundry: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    retail: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    personalSupport: CreateResponseQuestionDto
    
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    officeActivities: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    computerSkills: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    restaurantSkills: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    kitchenSkills: CreateResponseQuestionDto


    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    warehouse: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    tools: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    tradesAndConstruction: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    gardening: CreateResponseQuestionDto
}

class CreateIndependencyLifeDto {
    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    organization: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    personalcCare: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    maintenanceAndCleaning: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    mechanicsAndRepairs: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    communityTravel: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    transportation: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    kitchenAppliances: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    foodPlanning: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    managingMoney: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    personalManagement: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    safety: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    problemSolving: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    socialInteraction: CreateResponseQuestionDto

    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    livingOthers: CreateResponseQuestionDto


    @ValidateNested()
    @Type(() => CreateResponseQuestionDto)
    @ApiProperty({ type: CreateResponseQuestionDto })
    interpersonalRelationships: CreateResponseQuestionDto
    
}

class CreateQuestionDto{
    @ValidateNested()
    @Type(() => CreateTaskDto)
    @ApiProperty({ type: CreateTaskDto })
    questions: CreateBasicLifeDto[]

    @ValidateNested()
    @Type(() => CreateTaskDto)
    @ApiProperty({ type: CreateTaskDto })
    question2: CreateCommunityParticipationDto[]

    @ValidateNested()
    @Type(() => CreateTaskDto)
    @ApiProperty({ type: CreateTaskDto })
    question3: CreateDomesticLifeDto[]

    @ValidateNested()
    @Type(() => CreateTaskDto)
    @ApiProperty({ type: CreateTaskDto })
    question4: CreateSchoolsDto[]

    @ValidateNested()
    @Type(() => CreateTaskDto)
    @ApiProperty({ type: CreateTaskDto })
    question5: CreateVocationalDto[]

    @ValidateNested()
    @Type(() => CreateTaskDto)
    @ApiProperty({ type: CreateTaskDto })
    question6: CreateIndependencyLifeDto[]
}

class CreateAreaDto {
    @ApiProperty()
    @IsNotEmpty()
    area1: CreateTaskDto[]

    @ApiProperty()
    @IsNotEmpty()
    area2: CreateTaskDto[]

    @ApiProperty()
    @IsNotEmpty()
    area3: CreateTaskDto[]

    @ApiProperty()
    @IsNotEmpty()
    area4: CreateTaskDto[]

    @ApiProperty()
    @IsNotEmpty()
    area5: CreateTaskDto[]

    @ApiProperty()
    @IsNotEmpty()
    area6: CreateTaskDto[]
}

export class CreateAssessmentOfFunctionalLivingSkillsDto {
    @ValidateNested()
    @Type(() => CreateBasicLifeDto)
    @ApiProperty({ type: CreateBasicLifeDto })
    basicLife: CreateBasicLifeDto;

    @ValidateNested()
    @Type(() => CreateCommunityParticipationDto)
    @ApiProperty({ type: CreateCommunityParticipationDto })
    communityParticipation: CreateCommunityParticipationDto

    @ValidateNested()
    @Type(() => CreateDomesticLifeDto)
    @ApiProperty({ type: CreateDomesticLifeDto })
    domesticLife:CreateDomesticLifeDto

    @ValidateNested()
    @Type(() => CreateSchoolsDto)
    @ApiProperty({ type: CreateSchoolsDto })
    schools: CreateSchoolsDto

    @ValidateNested()
    @Type(() => CreateVocationalDto)
    @ApiProperty({ type: CreateVocationalDto })
    vocation: CreateVocationalDto

    @ValidateNested()
    @Type(() => CreateIndependencyLifeDto)
    @ApiProperty({ type: CreateIndependencyLifeDto })
    independencyLife:CreateIndependencyLifeDto
}
