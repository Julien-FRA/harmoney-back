import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HouseholdService } from '../services/household.service';
import { CreateHouseholdDto } from '../dto/create-household.dto';

@Controller('household')
export class HouseholdController {
  constructor(private readonly householdService: HouseholdService) {}

  @Post('create')
  createHousehold(@Body() createHouseholdDto: CreateHouseholdDto) {
    return this.householdService.createHousehold(createHouseholdDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.householdService.findById(id);
  }
}
