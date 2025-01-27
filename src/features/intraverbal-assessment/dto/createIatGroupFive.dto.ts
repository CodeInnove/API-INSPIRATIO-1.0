import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ICategories {
  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsTheShapeOfTheTire: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsTheShapeOfTheTireScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatGrowsInTheGarden: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatGrowsInTheGardenScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanBiteYou: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanBiteYouScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouDoWithASpoon: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouDoWithASpoonScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouPush: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouPushScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouFindWheels: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouFindWheelsScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouUseToSmell: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouUseToSmellScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomeClothes: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomeClothesScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomethingSharp: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomethingSharpScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsTheColorOfTheTire: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsTheColorOfTheTireScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group5: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group5Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group5: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group5Score: string;

}
