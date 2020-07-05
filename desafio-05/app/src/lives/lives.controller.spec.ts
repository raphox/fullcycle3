import { Test, TestingModule } from '@nestjs/testing';
import { LivesController } from './lives.controller';

describe('Lives Controller', () => {
  let controller: LivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivesController],
    }).compile();

    controller = module.get<LivesController>(LivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
