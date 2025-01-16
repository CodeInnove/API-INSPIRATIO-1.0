import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PediatricNeurologicalEvaluationService } from './pediatric-neurological-evaluation.service';
import { CreatePediatricNeurologicalEvaluationDto } from './dto/create-pediatric-neurological-evaluation.dto';
import { UpdatePediatricNeurologicalEvaluationDto } from './dto/update-pediatric-neurological-evaluation.dto';
import { ApiTags } from '@nestjs/swagger';
import { IPediatricNeurologicalEvaluationEntity } from 'src/entities/pediatric-neurological-evaluation.entity';

@ApiTags('Pediatric Neurological Evaluation')
@Controller('pediatric-neurological-evaluation')
export class PediatricNeurologicalEvaluationController {
  constructor(private readonly pediatricNeurologicalEvaluationService: PediatricNeurologicalEvaluationService) {}

    @Post()
    async create(@Body() data: CreatePediatricNeurologicalEvaluationDto): Promise<IPediatricNeurologicalEvaluationEntity> {
      return await this.pediatricNeurologicalEvaluationService.create(data);
    }
  
    @Get()
    async findAll(): Promise<IPediatricNeurologicalEvaluationEntity[]> {
      return await this.pediatricNeurologicalEvaluationService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param() id: string): Promise<IPediatricNeurologicalEvaluationEntity> {
      return await this.pediatricNeurologicalEvaluationService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param() id: string, @Body() data: UpdatePediatricNeurologicalEvaluationDto): Promise<IPediatricNeurologicalEvaluationEntity> {
      return await this.pediatricNeurologicalEvaluationService.update(id, data);
    }
  
    @Delete(':id')
    async delete(@Param() id: string): Promise<IPediatricNeurologicalEvaluationEntity> {
      return await this.pediatricNeurologicalEvaluationService.delete(id);
    }
  }
  
