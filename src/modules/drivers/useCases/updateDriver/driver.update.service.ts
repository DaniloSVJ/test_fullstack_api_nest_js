import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../../../../shared/erros/AppError';
import { DriverDTO } from '../../drivers.dto';

@Injectable()
export class UpdateServiceDriver {
  constructor(private prisma: PrismaClient) {}
  async update(id: string, data: DriverDTO) {
    const driverExists = await this.prisma.driver.findUnique({
      where: {
        id,
      },
    });
    if (!driverExists) {
      throw new AppError('Driver does not exists!');
    }

    return await this.prisma.driver.update({
      data,
      where: {
        id,
      },
    });
  }
}
