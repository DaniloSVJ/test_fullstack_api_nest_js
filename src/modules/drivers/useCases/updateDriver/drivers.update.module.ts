import { Module } from '@nestjs/common';
import { UpdateServiceDriver } from './driver.update.service';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { DriversUpdateController } from './drivers.update.controller';

@Module({
  controllers: [DriversUpdateController],
  providers: [UpdateServiceDriver, PrismaService, PrismaClient],
})
export class UpdateDriversModule {}
