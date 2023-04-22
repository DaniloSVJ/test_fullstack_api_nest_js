import { Module } from '@nestjs/common';
import { CreateServiceDriver } from './driver.create.service';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { DriversCreateController } from './drivers.create.controller';

@Module({
  controllers: [DriversCreateController],
  providers: [CreateServiceDriver, PrismaService, PrismaClient],
})
export class CreateDriveModule {}
