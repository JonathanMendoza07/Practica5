import { CreateIdiomaIdio } from './idio/create-idioma.idio';
import { UpdateIdiomaIdio } from './idio/update-idioma.idio';
import { Idioma } from './entities/idioma.entity';
import { Repository } from 'typeorm';
export declare class IdiomaService {
    private readonly idiomaRepository;
    private readonly logger;
    constructor(idiomaRepository: Repository<Idioma>);
    create(createidiomaDto: CreateIdiomaIdio): Promise<Idioma>;
    findAll(): Promise<Idioma[]>;
    findOne(id: string): Promise<Idioma>;
    remove(id: string): Promise<void>;
    update(id: string, updateidiomaDto: UpdateIdiomaIdio): Promise<Idioma>;
}
