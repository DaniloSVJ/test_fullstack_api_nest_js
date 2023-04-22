/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from '../../../../database/PrismaService';
import { ListServiceDriver } from './driver.list.service'
import { DriversListController} from './drivers.list.controller'
import { DriverDTO } from '../../drivers.dto';
import { PrismaClient } from '@prisma/client';
describe('UserController', () => {
  let driveList: DriversListController;
  let prisma: PrismaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DriversListController],
      providers: [DriversListController,PrismaClient,PrismaService,ListServiceDriver],
    }).compile();
    driveList = app.get<DriversListController>(DriversListController);
    prisma = app.get<PrismaService>(PrismaService);
  });
  describe('Post /driver', () => {
    it('CONTROLLER:should be able list Driver', async () => {
      const all = await prisma.driver.findMany()
      const driveNew = await driveList.findAll();
      expect(driveNew).toEqual(all);

    });
  });
});
