import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SessionSummaryAbaService } from './session-summary-aba.service';
import { CreateSessionSummaryAbaDto } from './dto/create-session-summary-aba.dto';
import { UpdateSessionSummaryAbaDto } from './dto/update-session-summary-aba.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Session Summary ABA')
@Controller('session-summary-aba')
export class SessionSummaryAbaController {
  constructor(private readonly sessionSummaryAbaService: SessionSummaryAbaService) {}

 @Post()
   async createSpm(@Body() createSensoryProcessingMeasureDto: CreateSessionSummaryAbaDto) {
     return await this.sessionSummaryAbaService.create(createSensoryProcessingMeasureDto);
   }
 
   @Get()
   async findAllSpm() {
     return await this.sessionSummaryAbaService.findAll();
   }
 
   @Get(':id')
   async findOneSpm(@Param('id') id: string) {
     return await this.sessionSummaryAbaService.findOne(id);
   }
 
   @Put(':id')
   async updateSpm(@Param('id') id: string, @Body() updateSensoryProcessingMeasureDto: UpdateSessionSummaryAbaDto) {
     return await this.sessionSummaryAbaService.update(id, updateSensoryProcessingMeasureDto);
   }
 
   @Delete(':id')
   async deleteSpm(@Param('id') id: string) {
     return await this.sessionSummaryAbaService.delete(id);
   }
 }
