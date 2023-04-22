import { Test, TestingModule } from '@nestjs/testing';
import { DeleteServiceDriver } from './driver.delete.service';
import { CreateServiceDriver } from '../createDriver/driver.create.service';
import { DriverDTO } from '../../drivers.dto';
// import jest from 'jest';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

//=================================================
describe('UserService', () => {
  let deleteDrive: DeleteServiceDriver;
  let createDriver: CreateServiceDriver;

  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteServiceDriver,
        CreateServiceDriver,
        PrismaClient,
        PrismaService,
      ],
    }).compile();
    deleteDrive = module.get<DeleteServiceDriver>(DeleteServiceDriver);
    createDriver = module.get<CreateServiceDriver>(CreateServiceDriver);

    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getDrivers', () => {
    it('should delete a driver and return empty body', async () => {
      const newDriver: DriverDTO = {
        name: 'Driver Teste',
        birth_date: new Date(),
        license: '4545487333',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const createdDriver = await createDriver.create(newDriver);

      const id = createdDriver.id;
      expect(await deleteDrive.delete(id)).toBeUndefined();
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
