import { ApiProperty } from '@nestjs/swagger';
import { IsArray,  IsNotEmpty,  IsOptional, IsString } from 'class-validator';
import { Responsible } from 'src/types/responsible';

export class CreateAnamneseGeneralDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsArray()
    patient: string[];

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    dateBirth: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    age: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    maritalStatus: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    sex: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    naturalization: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    schoolName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    schoolPeriod: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    @IsArray()
    responsible: Responsible[]
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    forwarded: string;
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    dateAnamnese: string;
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    professional: string;

    @ApiProperty()
    affiliation: string;

    @ApiProperty()
    adress: string;

    @ApiProperty()
    complainAndDuration: string;

    @ApiProperty()
    background: string;

    @ApiProperty()
    development: string;

    @ApiProperty()
    socioCultural: string;


}
