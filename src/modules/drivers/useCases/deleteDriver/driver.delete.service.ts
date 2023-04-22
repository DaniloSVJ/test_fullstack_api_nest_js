import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { response } from 'express';
import { AppError } from '../../../../shared/erros/AppError';
import { DriverDTO } from '../../drivers.dto';

@Injectable()
export class DeleteServiceDriver {
  constructor(private prisma: PrismaClient) {}
  async delete(id: string) {
    const driverExists = await this.prisma.driver.findUnique({
      where: {
        id,
      },
    });
    if (!driverExists) {
      throw new AppError('Driver does not exists!');
    }
    await this.prisma.driver.delete({
      where: {
        id,
      },
    });

    return;
  }
}
