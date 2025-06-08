import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HouseholdMembersService } from '../services/household_members.service';
import { CreateHouseholdMembersDto } from '../dto/create_household_members.dto';

@Controller('household-members')
export class HouseholdMembersController {
  constructor(
    private readonly householdMembersService: HouseholdMembersService,
  ) {}

  @Post('create')
  createHouseholdMember(
    @Body() createHouseholdMembersDto: CreateHouseholdMembersDto,
  ) {
    return this.householdMembersService.createHouseholdMember(
      createHouseholdMembersDto,
    );
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.householdMembersService.findById(id);
  }

  @Get()
  findAll() {
    return this.householdMembersService.findAll();
  }
}
