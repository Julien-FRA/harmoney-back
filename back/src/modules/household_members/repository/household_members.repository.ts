import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHouseholdMembersDto } from '../dto/create-household_members.dto';

@Injectable()
export class HouseholdMembersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createHouseholdMember(householdMembers: CreateHouseholdMembersDto) {
    const { userId, householdId } = householdMembers;
    return this.prisma.householdMember.create({
      data: {
        role: 'admin',
        user: { connect: { id: userId } },
        household: { connect: { id: householdId } },
      },
    });
  }

  async findById(id: string) {
    return this.prisma.householdMember.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<any[]> {
    return this.prisma.householdMember.findMany();
  }

  async findByHouseholdId(householdId: string) {
    return this.prisma.householdMember.findMany({
      where: { householdId: householdId },
    });
  }
}
