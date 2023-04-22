import { Test, TestingModule } from '@nestjs/testing';
import { CreateServiceDriver } from './driver.create.service';
import { DriverDTO } from '../../drivers.dto';
// import jest from 'jest';
import { PrismaService } from '../../../../database/PrismaService';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
//=================================================
let service: CreateServiceDriver;
let prisma: PrismaService;
const fakeDriver = [
  {
    name: 'Driver Teste',
    birth_date: new Date(),
    license: '7898s789',
    car_model: 'Trole',
    license_plate: 'PMN-8787878',
  },
];
//=================================================

//=================================================
describe('UserService', () => {
  let service: CreateServiceDriver;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateServiceDriver, PrismaClient, PrismaService],
    }).compile();
    service = module.get<CreateServiceDriver>(CreateServiceDriver);

    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getDrivers', () => {
    it('should be able to create a new driver', async () => {
      const newDriver: DriverDTO = {
        name: 'Driver Teste',
        birth_date: new Date(),
        license: '321654987',
        car_model: 'Trole',
        license_plate: 'PMN-8787878',
      };
      const createdDriver = await service.create(newDriver);
      const id = createdDriver.id;
      expect(createdDriver).toHaveProperty('id');
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
