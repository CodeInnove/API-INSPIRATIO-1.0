import { Test, TestingModule } from '@nestjs/testing';
import { AutismBehaviorChecklistController } from './autismBehaviorChecklist.controller';
import { AutismBehaviorChecklistService } from './autismBehaviorChecklist.service';

describe('AutismBehaviorChecklistController', () => {
  let controller: AutismBehaviorChecklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutismBehaviorChecklistController],
      providers: [AutismBehaviorChecklistService],
    }).compile();

    controller = module.get<AutismBehaviorChecklistController>(AutismBehaviorChecklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
