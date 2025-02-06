import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaEyeContactService } from './aba-eye-contact.service';
import { AbaEyeContactController } from './aba-eye-contact.controller';
import { AbaEyeContact, AbaEyeContactSchema } from 'src/entities/aba-eye-contact.entity';
import { AbaEyeContactRepository } from './aba-eye-contact.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaEyeContact.name, schema: AbaEyeContactSchema }]),
  ],
  controllers: [AbaEyeContactController],
  providers: [AbaEyeContactService, AbaEyeContactRepository],
  exports: [AbaEyeContactService]
})
export class AbaEyeContactModule {}