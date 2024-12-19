import { Test, TestingModule } from '@nestjs/testing';
import { AnamneseGeneralController } from './anamnese_general.controller';
import { AnamneseGeneralService } from './anamnese_general.service';

describe('AnamneseGeneralController', () => {
  let controller: AnamneseGeneralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnamneseGeneralController],
      providers: [AnamneseGeneralService],
    }).compile();

    controller = module.get<AnamneseGeneralController>(AnamneseGeneralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
