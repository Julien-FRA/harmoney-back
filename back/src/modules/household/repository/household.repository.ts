import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHouseholdDto } from '../dto/create-household.dto';

@Injectable()
export class HouseholdRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createHousehold(createHouseholdDto: CreateHouseholdDto) {
    return this.prisma.household.create({
      data: {
        name: createHouseholdDto.name,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.household.findUnique({ where: { id } });
  }

  async findAll(): Promise<any[]> {
    return this.prisma.household.findMany();
  }
}
