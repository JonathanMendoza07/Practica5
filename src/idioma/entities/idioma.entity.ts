import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Idioma {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {unique:true})
    descripcion:string;

}