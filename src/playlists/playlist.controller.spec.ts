import { Test, TestingModule } from '@nestjs/testing';
import { PlayListsController } from './playlist.controller';

describe('PlaylistController', () => {
  let controller: PlayListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayListsController],
    }).compile();

    controller = module.get<PlayListsController>(PlayListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
