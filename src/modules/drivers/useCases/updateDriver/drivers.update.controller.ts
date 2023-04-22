import { Body, Controller, Param, Put } from '@nestjs/common';
import { DriverDTO } from '../../drivers.dto';
import { UpdateServiceDriver } from './driver.update.service';

@Controller('drivers')
export class DriversUpdateController {
  constructor(private readonly driversService: UpdateServiceDriver) {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: DriverDTO) {
    return this.driversService.update(id, data);
  }
}
