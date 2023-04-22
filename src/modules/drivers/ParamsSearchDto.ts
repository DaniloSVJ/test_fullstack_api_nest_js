import { ApiProperty } from '@nestjs/swagger';

export class ParamsSearchDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  license: number;

  @ApiProperty()
  license_plate: string;
}
