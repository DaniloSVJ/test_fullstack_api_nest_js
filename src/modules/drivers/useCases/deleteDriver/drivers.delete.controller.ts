import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteServiceDriver } from './driver.delete.service';

@Controller('drivers')
export class DriversDeleteController {
  constructor(private readonly driversService: DeleteServiceDriver) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.driversService.delete(id);
  }
}
