import { Module } from '@nestjs/common';
import { ExpensesSharesController } from './controllers/expenses_shares.controller';
import { ExpensesSharesService } from './services/expenses_shares.service';
import { ExpensesSharesRepository } from './repository/expenses_shares.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { ExpensesModule } from '../expenses/expenses.module';

@Module({
  imports: [PrismaModule, UsersModule, ExpensesModule],
  controllers: [ExpensesSharesController],
  providers: [ExpensesSharesService, ExpensesSharesRepository],
  exports: [ExpensesSharesService],
})
export class ExpensesSharesModule {}
