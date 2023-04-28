/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import {UpdateServiceDriver} from './driver.update.service'
import {DriversUpdateController} from './drivers.update.controller'

import {DriversCreateController} from "../createDriver/drivers.create.controller"
import {CreateServiceDriver} from "../createDriver/driver.create.service"

import { PrismaService } from '../../../../database/PrismaService';

import { DriverDTO } from '../../drivers.dto';
import { PrismaClient } from '@prisma/client';
describe('UserController', () => {
  let driveCreate: DriversCreateController;
  let driveUpdate : DriversUpdateController
  let prismaService: PrismaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DriversCreateController,DriversUpdateController],
      providers: [CreateServiceDriver,PrismaClient,PrismaService,UpdateServiceDriver],
    }).compile();
    driveUpdate = app.get<DriversUpdateController>(DriversUpdateController);
    driveCreate = app.get<DriversCreateController>(DriversCreateController);
    prismaService = app.get<PrismaService>(PrismaService);

  });
  describe('Post /driver', () => {
    it('CONTROLLER:should be able update a driver', async () => {
      const drive: DriverDTO = {
        name: 'Driver Teste',
        birth_date: "12/06/1999",
        license: '1563333',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const driveNew = await driveCreate.create(drive);
      const id = driveNew.id
      const data: DriverDTO = {
        name: 'Driver Teste',
        birth_date: "12/06/1999",
        license: '1563333',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const response = await driveUpdate.update(id,data);

      const result = {
        id: id,
        name: data.name,
        birth_date: data.birth_date,
        license: data.license,
        car_model: data.car_model,
        license_plate: data.license_plate,
      };
      expect(response).toEqual(result);

      await prismaService.driver.delete({
        where: {
          id,
        },
      });
    });
  });
});
