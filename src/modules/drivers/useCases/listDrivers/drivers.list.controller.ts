import { Controller, Get } from '@nestjs/common';
import { ListServiceDriver } from './driver.list.service';

@Controller('drivers')
export class DriversListController {
  constructor(private readonly driversService: ListServiceDriver) {}

  @Get()
  async findAll() {
    return this.driversService.findAll();
  }
}
