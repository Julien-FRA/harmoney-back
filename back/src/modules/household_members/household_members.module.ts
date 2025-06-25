import { Module } from '@nestjs/common';
import { HouseholdMembersController } from './controllers/household_members.controller';
import { HouseholdMembersService } from './services/household_members.service';
import { HouseholdMembersRepository } from './repository/household_members.repository';
import { UsersModule } from '../users/users.module';
import { HouseholdModule } from '../household/household.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, UsersModule, HouseholdModule],
  controllers: [HouseholdMembersController],
  providers: [HouseholdMembersService, HouseholdMembersRepository],
  exports: [HouseholdMembersService],
})
export class HouseholdMembersModule {}
