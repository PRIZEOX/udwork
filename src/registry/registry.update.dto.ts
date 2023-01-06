import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Offer } from '../offers/offer.entity';
import { User } from '../users/user.entity';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class RegistryUpdateDto {
  @ApiProperty()
  uuid: number;
  @ApiPropertyOptional()
  sum: number;
  @ApiPropertyOptional()
  createdAt: Date;
  @ApiPropertyOptional()
  investor: User;
  @ApiPropertyOptional()
  offer: Offer;
}
