/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import {SearchServiceDriver} from './driver.search.service'
import {DriversSearchController} from './drivers.search.controller'

import {DriversCreateController} from "../createDriver/drivers.create.controller"
import {CreateServiceDriver} from "../createDriver/driver.create.service"

import { PrismaService } from '../../../../database/PrismaService';

import { DriverDTO } from '../../drivers.dto';
import { PrismaClient } from '@prisma/client';
describe('UserController', () => {
  let driveCreate: DriversCreateController;
  let driveSearch : DriversSearchController
  let prismaService: PrismaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DriversCreateController,DriversSearchController],
      providers: [CreateServiceDriver,PrismaClient,PrismaService,SearchServiceDriver],
    }).compile();
    driveSearch = app.get<DriversSearchController>(DriversSearchController);
    driveCreate = app.get<DriversCreateController>(DriversCreateController);
    prismaService = app.get<PrismaService>(PrismaService);

  });
  describe('Post /driver', () => {
    it('CONTROLLER: should return one or more drivers with the search data', async () => {
      const newDriver: DriverDTO = {
        name: 'Driver Teste',
        birth_date:  "12/06/1999",
        license: '987456002255',
        car_model: 'Trole',
        license_plate: 'PMN-98754',
      };
      const createdDriver = await driveCreate.create(newDriver);
      const id = createdDriver.id;

      const newDriver2: DriverDTO = {
        name: 'Driver2 Teste2',
        birth_date:  "12/06/1999",
        license: '357456996633',
        car_model: 'Trole',
        license_plate: 'PMN-22222',
      };
      const createdDriver2 = await driveCreate.create(newDriver2);
      const id2 = createdDriver2.id;

      const newDriver3: DriverDTO = {
        name: 'Driver3 Teste3',
        birth_date:  "12/06/1999",
        license: '951159886622',
        car_model: 'Trole',
        license_plate: 'PMN-11111',
      };
      const createdDriver3 = await driveCreate.create(newDriver3);
      const id3 = createdDriver3.id;
      const query = {
        name: newDriver.name,
        license: newDriver2.license,
        license_plate: newDriver3.license_plate,
      };

      const response = await driveSearch.search( query    );
      expect(response.find((r) => r.id === id)).toEqual(createdDriver);
      expect(response.find((r) => r.id === id2)).toEqual(createdDriver2);
      expect(response.find((r) => r.id === id3)).toEqual(createdDriver3);

      await prismaService.driver.delete({
        where: {
          id,
        },
      });
      await prismaService.driver.delete({
        where: {
          id:id2,
        },
      });
      await prismaService.driver.delete({
        where: {
          id:id3,
        },
      });
    });
  });
});
