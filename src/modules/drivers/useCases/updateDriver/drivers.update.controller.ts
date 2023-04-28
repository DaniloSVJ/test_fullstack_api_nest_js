import { Body, Controller, Param, Put } from '@nestjs/common';
import { DriverDTO } from '../../drivers.dto';
import { UpdateServiceDriver } from './driver.update.service';
import {ParamsCreateDto} from "../../ParamsCreateDto"

@Controller('drivers')
export class DriversUpdateController {
  constructor(private readonly driversService: UpdateServiceDriver) {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ParamsCreateDto) {
    return this.driversService.update(id, data);
  }
}
