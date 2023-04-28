import { Test, TestingModule } from '@nestjs/testing';
import { SearchServiceDriver } from './driver.search.service';
import { CreateServiceDriver } from '../createDriver/driver.create.service';
import { DriverDTO } from '../../drivers.dto';
// import jest from 'jest';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

//=================================================
describe('UserService', () => {
  let searchDrive: SearchServiceDriver;
  let createDriver: CreateServiceDriver;

  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchServiceDriver,
        CreateServiceDriver,
        PrismaClient,
        PrismaService,
      ],
    }).compile();
    searchDrive = module.get<SearchServiceDriver>(SearchServiceDriver);
    createDriver = module.get<CreateServiceDriver>(CreateServiceDriver);

    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getDrivers', () => {
    it('should return one or more drivers with the search data', async () => {
      const newDriver: DriverDTO = {
        name: 'Driver Teste',
        birth_date:  "12/06/1999",
        license: '987456002255',
        car_model: 'Trole',
        license_plate: 'PMN-98754',
      };
      const createdDriver = await createDriver.create(newDriver);
      const id = createdDriver.id;

      const newDriver2: DriverDTO = {
        name: 'Driver2 Teste2',
        birth_date:  "12/06/1999",
        license: '357456996633',
        car_model: 'Trole',
        license_plate: 'PMN-22222',
      };
      const createdDriver2 = await createDriver.create(newDriver2);
      const id2 = createdDriver2.id;

      const newDriver3: DriverDTO = {
        name: 'Driver3 Teste3',
        birth_date:  "12/06/1999",
        license: '951159886622',
        car_model: 'Trole',
        license_plate: 'PMN-11111',
      };
      const createdDriver3 = await createDriver.create(newDriver3);
      const id3 = createdDriver3.id;

      const response = await searchDrive.search(
        newDriver.name,
        newDriver2.license,
        newDriver3.license_plate,
      );
      const tam = response.length;

      expect(response.find((r) => r.id === id)).toHaveProperty('id', id);
      expect(response.find((r) => r.id === id2)).toHaveProperty('id', id2);
      expect(response.find((r) => r.id === id3)).toHaveProperty('id', id3);

      await prisma.driver.delete({
        where: {
          id,
        },
      });
      await prisma.driver.delete({
        where: {
          id: id2,
        },
      });
      await prisma.driver.delete({
        where: {
          id: id3,
        },
      });
    });
  });
});
