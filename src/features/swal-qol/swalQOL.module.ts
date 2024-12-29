import { Module } from '@nestjs/common';
import { SwalQolService } from './swalQOL.service';
import { SwalQolController } from './swalQOL.controller';

@Module({
  controllers: [SwalQolController],
  providers: [SwalQolService],
})
export class SwalQolModule {}
