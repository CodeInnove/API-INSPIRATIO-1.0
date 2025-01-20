import { ApiProperty } from "@nestjs/swagger";

export class CreateSessionSummaryAbaDto {
    @ApiProperty()
    doctor: string;

    @ApiProperty()
    patient: string;

    @ApiProperty()
    responsable:string;
    
    @ApiProperty() 
    data: string;

    @ApiProperty()
    observation: string;
}
