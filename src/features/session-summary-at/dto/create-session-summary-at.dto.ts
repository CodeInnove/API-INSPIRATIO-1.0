import { ApiProperty } from "@nestjs/swagger";

export class CreateSessionSummaryAtDto {
    @ApiProperty()
    doctor: string;

    @ApiProperty()
    patient: string;

    @ApiProperty()
    data: string;

    @ApiProperty()
    hours: string;

    @ApiProperty()
    observation: string;
}
