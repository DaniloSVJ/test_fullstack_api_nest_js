import { Module } from '@nestjs/common';
import { DeleteServiceDriver } from './driver.delete.service';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { DriversDeleteController } from './drivers.delete.controller';

@Module({
  controllers: [DriversDeleteController],
  providers: [DeleteServiceDriver, PrismaService, PrismaClient],
})
export class DeleteDriversModule {}
