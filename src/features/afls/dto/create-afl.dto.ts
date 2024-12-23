import { ApiProperty } from "@nestjs/swagger";

export class CreateAflDto {
  @ApiProperty()
  basicLifeSkills: any;

  @ApiProperty()
  communityLifeSkills: any;

  @ApiProperty()
  domesticLifeSkills: any;

  @ApiProperty()
  independentLifeSkills: any;

  @ApiProperty()
  schoolLifeSkills: any;

  @ApiProperty()
  vocationalLifeSkills: any;
}

