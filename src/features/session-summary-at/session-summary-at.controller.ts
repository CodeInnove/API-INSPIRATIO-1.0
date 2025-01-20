import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SessionSummaryAtService } from './session-summary-at.service';
import { CreateSessionSummaryAtDto } from './dto/create-session-summary-at.dto';
import { UpdateSessionSummaryAtDto } from './dto/update-session-summary-at.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('session summary at')
@Controller('session-summary-at')
export class SessionSummaryAtController {
  constructor(private readonly sessionSummaryAtService: SessionSummaryAtService) {}

  @Post()
  async createSpm(@Body() createSensoryProcessingMeasureDto: CreateSessionSummaryAtDto) {
    return await this.sessionSummaryAtService.create(createSensoryProcessingMeasureDto);
  }

  @Get()
  async findAllSpm() {
    return await this.sessionSummaryAtService.findAll();
  }

  @Get(':id')
  async findOneSpm(@Param('id') id: string) {
    return await this.sessionSummaryAtService.findOne(id);
  }

  @Put(':id')
  async updateSpm(@Param('id') id: string, @Body() updateSensoryProcessingMeasureDto: UpdateSessionSummaryAtDto) {
    return await this.sessionSummaryAtService.update(id, updateSensoryProcessingMeasureDto);
  }

  @Delete(':id')
  async deleteSpm(@Param('id') id: string) {
    return await this.sessionSummaryAtService.delete(id);
  }
}
