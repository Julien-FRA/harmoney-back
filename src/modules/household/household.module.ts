import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HouseholdController } from './controllers/household.controller';
import { HouseholdService } from './services/household.service';
import { HouseholdRepository } from './repository/household.repository';

@Module({
  imports: [PrismaModule],
  controllers: [HouseholdController],
  providers: [HouseholdService, HouseholdRepository],
  exports: [HouseholdService],
})
export class HouseholdModule {}
