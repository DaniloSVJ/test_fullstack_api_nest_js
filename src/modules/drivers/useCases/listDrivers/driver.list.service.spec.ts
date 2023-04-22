import { Test, TestingModule } from '@nestjs/testing';
import { ListServiceDriver } from './driver.list.service';
import { CreateServiceDriver } from '../createDriver/driver.create.service';
import { DriverDTO } from '../../drivers.dto';
// import jest from 'jest';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

//=================================================
describe('UserService', () => {
  let listDrive: ListServiceDriver;
  let createDriver: CreateServiceDriver;

  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListServiceDriver,
        CreateServiceDriver,
        PrismaClient,
        PrismaService,
      ],
    }).compile();
    listDrive = module.get<ListServiceDriver>(ListServiceDriver);
    createDriver = module.get<CreateServiceDriver>(CreateServiceDriver);

    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getDrivers', () => {
    it('should return the last two created', async () => {
      const newDriver: DriverDTO = {
        name: 'Driver Teste',
        birth_date: new Date(),
        license: '45687951',
        car_model: 'Trole',
        license_plate: 'PMN-456789',
      };
      const createdDriver = await createDriver.create(newDriver);

      const id = createdDriver.id;
      const newDriver2: DriverDTO = {
        name: 'Driver Teste',
        birth_date: new Date(),
        license: '6468798789',
        car_model: 'Trole',
        license_plate: 'PMN-1234567',
      };
      const createdDriver2 = await createDriver.create(newDriver2);

      const id2 = createdDriver2.id;

      const response = await listDrive.findAll();
      const tam = response.length;

      expect(response[tam - 2]).toHaveProperty('id', id);
      expect(response[tam - 1]).toHaveProperty('id', id2);

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
    });
  });
});
