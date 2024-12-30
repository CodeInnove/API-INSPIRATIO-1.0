import { Module } from '@nestjs/common';
import { PortageGuidetoPreschoolEducationService } from './portage-guideto-preschool-education.service';
import { PortageGuidetoPreschoolEducationController } from './portage-guideto-preschool-education.controller';
import { MongooseModule } from '@nestjs/mongoose'; 
import { PortageGuidetoPreschoolEducationSchema } from 'src/entities/portage-guideto-preschool-education.entity';
import { PortageGuidetoPreschoolEducationRepository } from './portage-guideto-preschool-education.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'portageGuidetoPreschoolEducation', schema: PortageGuidetoPreschoolEducationSchema }
    ])
  ],
  controllers: [PortageGuidetoPreschoolEducationController],
  providers: [PortageGuidetoPreschoolEducationService, PortageGuidetoPreschoolEducationRepository],
})
export class PortageGuidetoPreschoolEducationModule {}
