import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesSharesController } from './expenses_shares.controller';

describe('ExpensesSharesController', () => {
  let controller: ExpensesSharesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpensesSharesController],
    }).compile();

    controller = module.get<ExpensesSharesController>(ExpensesSharesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
