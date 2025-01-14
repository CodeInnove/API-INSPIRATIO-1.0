import { ApiProperty } from "@nestjs/swagger";


class CreateAv {
    @ApiProperty()
    av1: Number;

    @ApiProperty()
    av2: Number;

    @ApiProperty()
    av3: Number;

    @ApiProperty()
    av4: Number;
}
export class CreateVbmappPeiDto {
    @ApiProperty()
    patient: string;

    @ApiProperty()
    doctor: string;

    @ApiProperty()
    avMilestone: CreateAv

    @ApiProperty()
    subTestEcoico: CreateAv

    @ApiProperty()
    avBarreirasAv: CreateAv
}
