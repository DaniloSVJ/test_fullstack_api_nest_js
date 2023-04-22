import { Module } from '@nestjs/common';
import { SearchServiceDriver } from './driver.search.service';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { DriversSearchController } from './drivers.search.controller';

@Module({
  controllers: [DriversSearchController],
  providers: [SearchServiceDriver, PrismaService, PrismaClient],
})
export class SearchDriversModule {}
