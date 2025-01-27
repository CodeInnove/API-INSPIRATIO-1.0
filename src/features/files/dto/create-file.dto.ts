import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFileDTO {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  type: string;
}