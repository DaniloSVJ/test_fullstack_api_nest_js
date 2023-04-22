import { Module } from '@nestjs/common';
import { CreateDriveModule } from './modules/drivers/useCases/createDriver/drivers.create.module';
import { DeleteDriversModule } from './modules/drivers/useCases/deleteDriver/drivers.delete.module';
import { ListDriversModule } from './modules/drivers/useCases/listDrivers/drivers.list.module';
import { UpdateDriversModule } from './modules/drivers/useCases/updateDriver/drivers.update.module';
import { SearchDriversModule } from './modules/drivers/useCases/searchDriver/drivers.search.module';

@Module({
  imports: [
    CreateDriveModule,
    DeleteDriversModule,
    ListDriversModule,
    UpdateDriversModule,
    SearchDriversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
