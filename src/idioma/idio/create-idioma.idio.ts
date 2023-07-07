import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateIdiomaIdio {

    @IsString()
    @IsNotEmpty()
    descripcion:string;

}