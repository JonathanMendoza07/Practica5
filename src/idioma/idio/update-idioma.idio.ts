import { PartialType } from '@nestjs/mapped-types';
import { CreateIdiomaIdio } from './create-idioma.idio';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateIdiomaIdio extends PartialType(CreateIdiomaIdio) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
