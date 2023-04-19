import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { PrismaService } from '../../database/PrismaService';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [DriversController],
  providers: [DriversService, PrismaService, PrismaClient],
})
export class DriversModule {}
