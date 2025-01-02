import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IPhysicalDto } from './createAstDevelopmentphysical.dto';
import { DevelopmentSocioCulturalDto } from './createAstDevelopmentSocioCultural.dto';
import { IBackgroundDto } from './createAstComplaintAndDuration.dto';

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
  complaintAndDurations: string;

  @ApiProperty( { type: IBackgroundDto} )
  @IsOptional()
  backgorund: IBackgroundDto;

  @ApiProperty( { type: IPhysicalDto} )
  @IsOptional()
  physycal: IPhysicalDto;

  @ApiProperty( { type: DevelopmentSocioCulturalDto} )
  @IsOptional()
  socioCultural: DevelopmentSocioCulturalDto;

  @ApiProperty()
  @IsOptional()
  @IsString()
  importantObservations: string;
    


};