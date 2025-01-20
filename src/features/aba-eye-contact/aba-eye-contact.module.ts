import { Module } from '@nestjs/common';
import { AbaEyeContactService } from './aba-eye-contact.service';
import { AbaEyeContactController } from './aba-eye-contact.controller';

@Module({
  controllers: [AbaEyeContactController],
  providers: [AbaEyeContactService],
})
export class AbaEyeContactModule {}
