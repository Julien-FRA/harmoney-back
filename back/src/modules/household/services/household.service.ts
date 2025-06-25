import { Injectable } from '@nestjs/common';
import { HouseholdRepository } from '../repository/household.repository';
import { CreateHouseholdDto } from '../dto/create-household.dto';

@Injectable()
export class HouseholdService {
  constructor(private readonly householdRepository: HouseholdRepository) {}

  async createHousehold(dto: CreateHouseholdDto) {
    return this.householdRepository.createHousehold(dto);
  }

  async findById(id: string) {
    return this.householdRepository.findById(id);
  }

  async findAll() {
    return this.householdRepository.findAll();
  }
}
