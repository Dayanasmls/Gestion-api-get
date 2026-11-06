import { Test, TestingModule } from '@nestjs/testing';
import { InicioControllerController } from './inicio-controller.controller';

describe('InicioControllerController', () => {
  let controller: InicioControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InicioControllerController],
    }).compile();

    controller = module.get<InicioControllerController>(InicioControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
