import { Module } from '@nestjs/common';
import { AmiofeService } from './amiofe.service';
import { AmiofeController } from './amiofe.controller';
import { AmiofeRepository } from './amiofe.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { AmiofeSchema } from 'src/entities/amiofe.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Amiofe', schema: AmiofeSchema },
    ])
  ],
  providers: [AmiofeService, AmiofeRepository],
  controllers: [AmiofeController],
})
export class AmiofeModule {}
