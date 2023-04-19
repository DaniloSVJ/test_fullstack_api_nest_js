import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DriverDTO } from './drivers.dto';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaClient) {}
  async create(data: DriverDTO) {
    const driverExists = await this.prisma.driver.findFirst({
      where: {
        license: data.license,
      },
    });

    if (driverExists) {
      throw new Error('Driver already exists!');
    }

    const driver = await this.prisma.driver.create({
      data,
    });

    return driver;
  }
}
