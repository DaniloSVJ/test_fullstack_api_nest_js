import { Controller, Get, Query } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ParamsSearchDto } from '../../ParamsSearchDto';
import { SearchServiceDriver } from './driver.search.service';
interface QueryElements {
  name: string;
  license: string;
  license_plate: string;
}
@Controller('drivers')
export class DriversSearchController {
  constructor(private readonly driversService: SearchServiceDriver) {}

  @Get('search/')
  @ApiParam({
    name: 'query',
    required: false,
    explode: false,
    type: ParamsSearchDto,
  })
  async search(@Query() query: QueryElements) {
    return this.driversService.search(
      query.name,
      query.license,
      query.license_plate,
    );
  }
}
