import { ApiProperty } from "@nestjs/swagger"; 

export class CreateServiceEvolutionDto {
    @ApiProperty()
    date: string;
    @ApiProperty()
    hours: string;
    @ApiProperty()
    doctor: string;
    @ApiProperty()
    patient: string;
    @ApiProperty()
    resume: string;
    @ApiProperty()
    behaviorDuringTheSession: string;
    @ApiProperty()
    observation: string;
}
