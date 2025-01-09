import { ApiProperty } from "@nestjs/swagger";



export class CreateChecklistDenverDto {
    @ApiProperty()
    dataCollection: any;

    @ApiProperty()
    createTableOne: any;

    @ApiProperty()
    createTableTwo: any;

    @ApiProperty()
    createTableThree: any;

    @ApiProperty()
    createTableFour: any;

}
