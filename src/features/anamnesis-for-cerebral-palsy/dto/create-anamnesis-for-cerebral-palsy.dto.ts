import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAfcpDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    basicLifGestationeSkills: any;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    development: any;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    foods: any;
}

