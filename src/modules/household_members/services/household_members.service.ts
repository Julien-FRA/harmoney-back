import { Injectable } from '@nestjs/common';
import { HouseholdMembersRepository } from '../repository/household_members.repository';
import { CreateHouseholdMembersDto } from '../dto/create-household_members.dto';
import { UsersService } from 'src/modules/users/services/users.service';
import { HouseholdService } from 'src/modules/household/services/household.service';

@Injectable()
export class HouseholdMembersService {
  constructor(
    private readonly householdMembersRepository: HouseholdMembersRepository,
    private readonly usersService: UsersService,
    private readonly householdService: HouseholdService,
  ) {}

  async createHouseholdMember(householdMembers: CreateHouseholdMembersDto) {
    const { userId, householdId } = householdMembers;
    await this.verifyExistingUserAndHouseHold(userId, householdId);

    return this.householdMembersRepository.createHouseholdMember(
      householdMembers,
    );
  }

  async findById(id: string) {
    return this.householdMembersRepository.findById(id);
  }

  async findAll() {
    return this.householdMembersRepository.findAll();
  }

  async findByHouseholdId(householdId: string) {
    if (!householdId) {
      throw new Error('Household ID is required');
    }

    return this.householdMembersRepository.findByHouseholdId(householdId);
  }

  private async verifyExistingUserAndHouseHold(
    userId: string,
    householdId: string,
  ) {
    if (!userId || !householdId) {
      throw new Error('User ID and Household ID are required');
    }

    const existingUser = await this.usersService.findById(userId);
    if (!existingUser) {
      throw new Error(`User with ID ${userId} does not exist`);
    }

    const existingHousehold = await this.householdService.findById(householdId);
    if (!existingHousehold) {
      throw new Error(`Household with ID ${householdId} does not exist`);
    }
  }
}
