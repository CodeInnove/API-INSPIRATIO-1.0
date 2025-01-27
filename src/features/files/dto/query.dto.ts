import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumberString, IsString } from "class-validator";

export class FileQueryDTO {
  @ApiProperty({ required: false })
  @IsString()
  name?: string;

  @ApiProperty({ required: false })
  @IsString()
  type?: string;

  @ApiProperty({ required: false })
  @IsString()
  userId?: string;

  @ApiProperty({ required: false })
  @IsDateString()
  createdAt?: string;

  @ApiProperty({ required: false })
  @IsNumberString()
  page?: string;

  @ApiProperty({ required: false })
  @IsNumberString()
  limit?: string;
}