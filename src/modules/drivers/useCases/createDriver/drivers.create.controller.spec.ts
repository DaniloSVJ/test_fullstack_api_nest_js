/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';

import {DriversCreateController} from "./drivers.create.controller"
import {CreateServiceDriver} from "./driver.create.service"

import { PrismaService } from '../../../../database/PrismaService';

import { DriverDTO } from '../../drivers.dto';
import { PrismaClient } from '@prisma/client';
describe('UserController', () => {
  let driveCreate: DriversCreateController;
  let prisma: PrismaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DriversCreateController],
      providers: [CreateServiceDriver,PrismaClient,PrismaService],
    }).compile();
    prisma = app.get<PrismaService>(PrismaService);

    driveCreate = app.get<DriversCreateController>(DriversCreateController);
  });
  describe('Post /driver', () => {
    it('CONTROLLER:should be able to register a driver', async () => {
      const drive: DriverDTO = {
        name: 'Driver Teste',
        birth_date: "12/06/1999",
        license: '156387000',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const response = await driveCreate.create(drive);
      const id = response.id
      const result = {
        id: id,
        name: drive.name,
        birth_date: drive.birth_date,
        license: drive.license,
        car_model: drive.car_model,
        license_plate: drive.license_plate,
      };
      expect(response).toEqual(result);
      prisma.driver.delete({where:{id}})
    });
  });
});
