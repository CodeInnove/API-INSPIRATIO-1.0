import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

// Um parâmetro opcional para paginação
export class QueryAfcpDto {
  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false })
  page?: number;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false })
  limit?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  doctor?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  patients?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  speciality?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  date: Date

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  role?: string;

  @IsOptional() 
  @IsDate() //Valida que o valor fornecido para o campo é uma data válida (Date).
  @ApiProperty({ required: false }) //Este decorator é específico do Swagger, utilizado para gerar documentação de APIs.
  dateInit?: Date; //representariam o intervalo de tempo para filtrar os resultados.

  @IsOptional()
  @IsDate()
  @ApiProperty({ required: false })
  dateEnd?: Date; // representariam o intervalo de tempo para filtrar os resultados.
  }
