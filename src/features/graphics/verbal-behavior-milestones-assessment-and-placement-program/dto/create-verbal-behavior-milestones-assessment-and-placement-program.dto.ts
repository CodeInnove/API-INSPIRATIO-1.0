import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';



class RepeatDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    question: string;

    
    @IsNotEmpty()
    @ApiProperty()
    av1: Number;
    
    @IsNotEmpty()
    @ApiProperty()
    av2: number;

    
    @IsNotEmpty()
    @ApiProperty()
    av3: Number;

    
    @IsNotEmpty()
    @ApiProperty()
    av4: Number;
}

class levelOneMilestoneDto {
    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    comand: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    touch


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    listener

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    skilsVisual


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    independentPlay


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    behaviorSocialPlay

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    imitation

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    spontaneousVocalBehavior


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    totalLevelOneMilestone: number;
}

//NÍVEL 2 (1 ano e 6 meses a 2 anos e 6 meses)
class levelTwoMilestoneDto{
    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    comand: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    touch: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    listener: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    skilsVisual: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    independentPlay: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    behaviorSocialPlay: RepeatDto;

    
    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    spontaneousVocalBehavior: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    imitation: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    intraverbal: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    classroomRoutineGroupSkills: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    linguisticStructure: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    totalLevelTwo: number;
}

//NÍVEL 3 (2 anos e 6 meses a 3 anos e 6 meses)

class levelThreeMilestoneDto{
    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    comand: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    touch: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    listener: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    skilsVisual: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    independentPlay: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    behaviorSocialPlay: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    listenerResponseFunctioncharacteristicClass: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    intraverbal: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    classroomRoutineGroupSkills: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    linguisticStructure: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    reading: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    writing: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    math: RepeatDto;
}

class GroupDto{
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    group: AssessmentsSubtesteEcoicoDto;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    group2: AssessmentsSubtesteEcoicoDto;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    group3: AssessmentsSubtesteEcoicoDto;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    group4: AssessmentsSubtesteEcoicoDto;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    group5: AssessmentsSubtesteEcoicoDto;
}

class SubtesteEcoicoDto extends GroupDto{
    @ApiProperty({ type: GroupDto })
    @IsString()
    @IsNotEmpty()
    av1: GroupDto;

    @ApiProperty({ type: GroupDto })
    @IsString()
    @IsNotEmpty()
    av2: GroupDto;


    @ApiProperty({ type: GroupDto })
    @IsString()
    @IsNotEmpty()
    av3: GroupDto;

    @ApiProperty({ type: GroupDto })
    @IsString()
    @IsNotEmpty()
    av4: GroupDto;

}

class ProsodiaDto extends GroupDto{

    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    intensity: string;

    @IsNotEmpty()
    @ApiProperty()
    duration: string;
}

class AssessmentsSubtesteEcoicoDto {
    
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    score: number;

    @IsNotEmpty()
    @ApiProperty()
    total: number;

    @IsNotEmpty()
    @ApiProperty()
    prosodia: ProsodiaDto;
}

class levelOneTaksDto{
    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    commandTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    touchTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    skilsVisualTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    independentPlayTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    behaviorSocialPlayTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    imitationTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    spontaneousVocalBehaviorTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    responseFunctionsFeaturesClassTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    intraverbalTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    classroomRoutineGroupSkillsTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    linguisticStructureTask: RepeatDto;
}

class levelThreeTaskDto {
    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    commandTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    touchTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    skilsVisualTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    independentPlayTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    behaviorSocialPlayTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    imitationTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    spontaneousVocalBehaviorTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    responseFunctionsFeaturesClassTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    intraverbalTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    classroomRoutineGroupSkillsTask: RepeatDto;


    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    linguisticStructureTask: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    reading: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    writing: RepeatDto;

    @ValidateNested()
    @Type(() => RepeatDto)
    @ApiProperty({ type: RepeatDto })
    math: RepeatDto;
}

// finalizar