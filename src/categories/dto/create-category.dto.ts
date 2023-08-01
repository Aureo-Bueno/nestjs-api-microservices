import { MaxLength, IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;
}
