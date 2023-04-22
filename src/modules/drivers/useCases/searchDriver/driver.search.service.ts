import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { filter } from 'rxjs';
import { AppError } from '../../../../shared/erros/AppError';
import { DriverDTO } from '../../drivers.dto';

@Injectable()
export class SearchServiceDriver {
  constructor(private prisma: PrismaClient) {}
  async search(name?: string, license?: string, license_plate?: string) {
    const driver = await this.prisma.driver.findMany({
      where: {
        OR: [
          {
            name: {
              equals: name,
            },
          },
          {
            license: {
              equals: license,
            },
          },
          {
            license_plate: {
              equals: license_plate,
            },
          },
        ],
      },
    });

    return driver;
  }
}
