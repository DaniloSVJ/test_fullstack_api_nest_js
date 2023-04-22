import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DriverDTO } from '../../drivers.dto';

@Injectable()
export class ListServiceDriver {
  constructor(private prisma: PrismaClient) {}
  async findAll() {
    return this.prisma.driver.findMany();
  }
}
