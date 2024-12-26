import { ApiProperty } from "@nestjs/swagger";

export class CreatePortageGuidetoPreschoolEducationDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    birthDay: string;

    @ApiProperty()
    Date: Date;

    @ApiProperty()
    socialization: any;
}
