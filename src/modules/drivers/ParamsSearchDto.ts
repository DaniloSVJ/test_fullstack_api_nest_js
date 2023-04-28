import { ApiProperty } from '@nestjs/swagger';

export class ParamsSearchDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  license: string;

  @ApiProperty()
  license_plate: string;
}
