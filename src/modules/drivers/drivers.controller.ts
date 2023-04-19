import { Body, Controller, Post } from '@nestjs/common';
import { DriverDTO } from './drivers.dto';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  async create(@Body() data: DriverDTO) {
    return this.driversService.create(data);
  }
}
