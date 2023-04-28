/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import {DriversDeleteController} from './drivers.delete.controller'
import {DeleteServiceDriver} from './driver.delete.service'

import {DriversCreateController} from "../createDriver/drivers.create.controller"
import {CreateServiceDriver} from "../createDriver/driver.create.service"

import { PrismaService } from '../../../../database/PrismaService';

import { DriverDTO } from '../../drivers.dto';
import { PrismaClient } from '@prisma/client';
describe('UserController', () => {
  let driveCreate: DriversCreateController;
  let driveDelete : DriversDeleteController
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DriversCreateController,DriversDeleteController],
      providers: [CreateServiceDriver,PrismaClient,PrismaService,DeleteServiceDriver],
    }).compile();
    driveDelete = app.get<DriversDeleteController>(DriversDeleteController);
    driveCreate = app.get<DriversCreateController>(DriversCreateController);
  });
  describe('Post /driver', () => {
    it('CONTROLLER:should be able to delete a driver', async () => {
      const drive: DriverDTO = {
        name: 'Driver Teste',
        birth_date:  "12/06/1999",
        license: '1563333',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const driveNew = await driveCreate.create(drive);
      const id = driveNew.id
      const response = await driveDelete.delete(id);

      expect(response).toBeUndefined();
    });
  });
});
