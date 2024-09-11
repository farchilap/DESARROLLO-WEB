import { IsNotEmpty, IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @Min(0.01)
  precio: number;

  @IsNumber()
  @Min(0)
  stock: number;
}

export class UpdateProductDto extends CreateProductDto {}

