import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IdeatoryDto, IdeomotorDto, MotorDto, NeurovegetativeFunctionsDto, SomaticDto } from './createAstDevelopmentphysical.dto';
import { DevelopmentSocioCulturalDto, IntegrativeDto, InteractiveDto } from './createAstDevelopmentSocioCultural.dto';
import { CircumstantialDto, ConstitutionalDto } from './createAstComplaintAndDuration.dto';

export class CreateAnamnesisSpeechTherapyDto {

  
  //identification: {
    
    //name: string;
    //birthDate: string;
    //maritalStatus: string;
    //placeOfBirth: string;
    //age: number;
    //sex: 'Masculino' | 'Feminino';
    //nationality: string;
    //schoolName: string;
    //studyPeriod: string;
  //};

  //affiliation: {
    //fatherName: string;
    //fatherAge: number;
    //fatherProfession: string;
    //fatherEducation: string;
    //motherName: string;
    //motherAge: number;
    //motherProfession: string;
    //motherEducation: string;
    //siblingsNames: { age: number }[];
  //};


  //address: {
    //street: string;
    //city: string;
    //number: string;
    //state: string;
    //zipCode: string;
    //phoneNumbers: string;
    //responsible: string;
    //referredBy: string;
    //anamnesisDate: string;
    //professional: string; // Assuming professional is stored as a string in the DTO
  //};

    @ApiProperty()
    @IsOptional()
    @IsString()
    complaintAndDuration: string;

    @ApiProperty({ type: ConstitutionalDto})
    @IsOptional()
    Constitutional: ConstitutionalDto

    @ApiProperty({ type: CircumstantialDto})
    @IsOptional()
    Circumstantial: CircumstantialDto

    @ApiProperty({ type: SomaticDto})
    @IsOptional()
    Somatic: SomaticDto

    @ApiProperty({ type: MotorDto})
    @IsOptional()
    Motor: MotorDto

    @ApiProperty({ type: NeurovegetativeFunctionsDto})
    @IsOptional()
    NeurovegetativeFunctions: NeurovegetativeFunctionsDto

    @ApiProperty({ type: IdeomotorDto})
    @IsOptional()
    Ideomotor: IdeomotorDto

    @ApiProperty({ type: IdeatoryDto})
    @IsOptional()
    Ideatory: IdeatoryDto

    @ApiProperty({ type: InteractiveDto})
    @IsOptional()
    Interactive: InteractiveDto

    @ApiProperty({ type: IntegrativeDto})
    @IsOptional()
    IntegrativeDto: IntegrativeDto

    @ApiProperty()
    @IsOptional()
    @IsString()
    importantObservations: string
};