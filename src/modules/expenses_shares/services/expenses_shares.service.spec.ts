import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesSharesService } from './expenses_shares.service';

describe('ExpensesSharesService', () => {
  let service: ExpensesSharesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpensesSharesService],
    }).compile();

    service = module.get<ExpensesSharesService>(ExpensesSharesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
