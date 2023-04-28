import { Body, Controller, Post } from '@nestjs/common';
import { DriverDTO } from '../../drivers.dto';
import { CreateServiceDriver } from './driver.create.service';
import { ApiParam } from '@nestjs/swagger';
import {ParamsCreateDto} from "../../ParamsCreateDto"
@Controller('drivers')
export class DriversCreateController {
  constructor(private readonly driversService: CreateServiceDriver) {}

  @Post()
  async create(@Body() data: ParamsCreateDto) {
    return this.driversService.create(data);
  }
}
