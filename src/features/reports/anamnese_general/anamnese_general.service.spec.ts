import { Test, TestingModule } from '@nestjs/testing';
import { AnamneseGeneralService } from './anamnese_general.service';

describe('AnamneseGeneralService', () => {
  let service: AnamneseGeneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnamneseGeneralService],
    }).compile();

    service = module.get<AnamneseGeneralService>(AnamneseGeneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
