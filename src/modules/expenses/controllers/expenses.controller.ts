import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExpensesService } from '../services/expenses.service';
import { CreateExpensesDto } from '../dto/create-expenses.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post('create')
  createExpense(@Body() createExpenseDto: CreateExpensesDto) {
    return this.expensesService.createExpense(createExpenseDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.expensesService.findById(id);
  }

  @Get()
  findAll() {
    return this.expensesService.findAll();
  }
}
