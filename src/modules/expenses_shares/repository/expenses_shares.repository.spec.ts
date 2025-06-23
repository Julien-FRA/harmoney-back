import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesSharesRepository } from './expenses_shares.repository';

describe('ExpensesSharesRepository', () => {
  let provider: ExpensesSharesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpensesSharesRepository],
    }).compile();

    provider = module.get<ExpensesSharesRepository>(ExpensesSharesRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
