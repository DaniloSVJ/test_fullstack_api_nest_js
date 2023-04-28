import { Test, TestingModule } from '@nestjs/testing';
import { CreateServiceDriver } from '../createDriver/driver.create.service';
import { UpdateServiceDriver } from './driver.update.service';

import { DriverDTO } from '../../drivers.dto';
// import jest from 'jest';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
//=================================================

describe('UserService', () => {
  let createDriver: CreateServiceDriver;
  let prisma: PrismaService;
  let updateDriver: UpdateServiceDriver;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateServiceDriver,
        UpdateServiceDriver,
        PrismaClient,
        { provide: PrismaService, useValue: mockDeep<PrismaService>() },
      ],
    }).compile();

    createDriver = module.get<CreateServiceDriver>(CreateServiceDriver);
    prisma = module.get<PrismaService>(PrismaService);
    updateDriver = module.get<UpdateServiceDriver>(UpdateServiceDriver);
  });

  describe('getDrivers', () => {
    it('should be able to create a new driver', async () => {
      const newDriver: DriverDTO = {
        name: 'Driver Teste',
        birth_date: "12/06/1999",
        license: '3216543355447788991100987',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const createdDriver = await createDriver.create(newDriver);
      const id = createdDriver.id;
      expect(createdDriver).toHaveProperty('id');
      const data: DriverDTO = {
        name: 'Driver Teste',
        birth_date: "12/06/1999",
        license: '3216543355447788991100987',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const update = await updateDriver.update(id, data);
      const result = {
        id: id,
        name: data.name,
        birth_date: data.birth_date,
        license: data.license,
        car_model: data.car_model,
        license_plate: data.license_plate,
      };
      expect(update).toEqual(result);

      await prisma.driver.delete({
        where: {
          id,
        },
      });
    });
  });
});
//=================================================

// const prismaMock = {
//   post: {
//     create: jest.fn().mockReturnValue(fakeDriver[0]),
//   },
// };
// describe('Create new Driver', () => {
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         CreateServiceDriver,
//         PrismaClient,
//         { provide: PrismaService, useValue: prismaMock },
//       ],
//     }).compile();
//     service = module.get<CreateServiceDriver>(CreateServiceDriver);

//     prisma = module.get<PrismaService>(PrismaService);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should be able to create a new driver', async () => {
//     const response = await service.create(fakeDriver[0]);

//     expect(response).toHaveProperty('id');
//   });
// });
