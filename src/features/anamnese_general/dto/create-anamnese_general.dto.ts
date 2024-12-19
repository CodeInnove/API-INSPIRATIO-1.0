import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";



export class IdentificationDto {
    
    @IsNotEmpty()
    @ApiProperty()
    patient: string;

    @IsNotEmpty()
    @ApiProperty()
    dateBirth: string;

    @IsNotEmpty()
    @ApiProperty()
    age: number;

    @IsNotEmpty()
    @ApiProperty()
    maritalStatus: string;

    @IsNotEmpty()
    @ApiProperty()
    sex: string;

    @IsNotEmpty()
    @ApiProperty()
    naturalization: string;

    @IsNotEmpty()
    @ApiProperty()
    nationality: string;

    @IsNotEmpty()
    @ApiProperty()
    schoolName: string;

    @IsNotEmpty()
    @ApiProperty()
    schoolPeriod: string;
}





