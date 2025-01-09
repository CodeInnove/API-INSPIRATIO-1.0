import { Module } from '@nestjs/common';
import { PortageGuidetoPhysiotherapyService } from './portage-guideto-physiotherapy.service';
import { PortageGuidetoPhysioterapyController } from './portage-guideto-physiotherapy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PortageGuidetoPhysiotherapySchema } from 'src/entities/portage-guideto-physiotherapy.entity';
import { PortageGuidetoPhysiotherapyRepository } from './portage-guideto-physiotherapy.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'portageGuidetoPhysiotherapy', schema: PortageGuidetoPhysiotherapySchema}
    ])
  ],
  providers: [PortageGuidetoPhysiotherapyService, PortageGuidetoPhysiotherapyRepository],
  controllers: [PortageGuidetoPhysioterapyController],
})
export class PortageGuidetoPhysiotherapyModule {}
