import { IdiomaService } from './idioma.service';
import { CreateIdiomaIdio } from './idio/create-idioma.idio';
import { UpdateIdiomaIdio } from './idio/update-idioma.idio';
import { Idioma } from './entities/idioma.entity';
export declare class IdiomaController {
    private readonly idiomaservice;
    constructor(idiomaservice: IdiomaService);
    create(createIdiomaidio: CreateIdiomaIdio): Promise<Idioma>;
    findAll(): Promise<Idioma[]>;
    findOne(id: string): Promise<Idioma>;
    update(id: string, updateidiomaDto: UpdateIdiomaIdio): Promise<Idioma>;
    remove(id: string): Promise<void>;
}
