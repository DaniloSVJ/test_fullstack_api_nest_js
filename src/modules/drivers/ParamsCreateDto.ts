import { ApiProperty } from '@nestjs/swagger';

export class ParamsCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  birth_date: string;

  @ApiProperty()
  license: string;

  @ApiProperty()
  car_model: string;
  
  @ApiProperty()
  license_plate: string;
}
