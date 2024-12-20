import { Test, TestingModule } from '@nestjs/testing';
import { AutismBehaviorChecklistService } from './autismBehaviorChecklist.service';

describe('AutismBehaviorChecklistService', () => {
  let service: AutismBehaviorChecklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutismBehaviorChecklistService],
    }).compile();

    service = module.get<AutismBehaviorChecklistService>(AutismBehaviorChecklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
