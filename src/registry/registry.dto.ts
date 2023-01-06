import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { Offer } from '../offers/offer.entity';
import { User } from '../users/user.entity';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

@Exclude()
export class RegistryDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  number: string;
  @Expose()
  @ApiPropertyOptional()
  sum: number;
  @Expose()
  @ApiPropertyOptional()
  createdAt: Date;
  @Expose()
  @ApiPropertyOptional()
  investor: User;
  @Expose()
  @ApiPropertyOptional()
  offer: Offer;
}
