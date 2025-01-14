import { Module } from '@nestjs/common';
import { VbmappService } from './vbmapp-pei.service';
import { VbmappPeiController } from './vbmapp-pei.controller';
import { VbmappRepository } from './vbmapp-pei.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { VbmappPeiSchema } from 'src/entities/vbmapp-pei.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Vbmapp', schema: VbmappPeiSchema }
    ])
  ],
  providers: [VbmappService, VbmappRepository],
  controllers: [VbmappPeiController],
})
export class VbmappPeiModule {}
