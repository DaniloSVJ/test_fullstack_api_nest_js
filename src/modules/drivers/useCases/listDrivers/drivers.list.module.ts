import { Module } from '@nestjs/common';
import { ListServiceDriver } from './driver.list.service';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { DriversListController } from './drivers.list.controller';

@Module({
  controllers: [DriversListController],
  providers: [ListServiceDriver, PrismaService, PrismaClient],
})
export class ListDriversModule {}
