import { Body, Controller, Post } from '@nestjs/common';
import { DriverDTO } from '../../drivers.dto';
import { CreateServiceDriver } from './driver.create.service';

@Controller('drivers')
export class DriversCreateController {
  constructor(private readonly driversService: CreateServiceDriver) {}

  @Post()
  async create(@Body() data: DriverDTO) {
    return this.driversService.create(data);
  }
}
