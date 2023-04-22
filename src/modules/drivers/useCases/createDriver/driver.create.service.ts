import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../../../../shared/erros/AppError';
import { DriverDTO } from '../../drivers.dto';

@Injectable()
export class CreateServiceDriver {
  constructor(private prisma: PrismaClient) {}
  async create(data: DriverDTO) {
    const driverExists = await this.prisma.driver.findFirst({
      where: {
        license: data.license,
      },
    });

    if (driverExists) {
      throw new AppError('Driver already exists!');
    }

    const driver = await this.prisma.driver.create({
      data,
    });

    return driver;
  }
}
