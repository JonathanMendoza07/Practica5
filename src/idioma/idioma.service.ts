import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateIdiomaIdio } from './idio/create-idioma.idio';
import { UpdateIdiomaIdio  } from './idio/update-idioma.idio';
import { Idioma } from './entities/idioma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IdiomaService {
  private readonly logger = new Logger('IdiomaService');

  constructor( 
    @InjectRepository(Idioma) 
    private readonly idiomaRepository: Repository<Idioma>,
  ){}

    async create(createidiomaDto: CreateIdiomaIdio) {
        try {
          const idioma =  this.idiomaRepository.create(createidiomaDto);
          await this.idiomaRepository.save(idioma);
          return idioma;
        } catch (error) {
          console.log(error)
          if (error.code==='23505')
            throw new BadRequestException(error.detail)
          this.logger.error(error);
          throw new InternalServerErrorException('Error no esperado')
        }
        
    }

  findAll() {
    return this.idiomaRepository.find({});
  }

  async findOne(id: string) {
    const idioma= await  this.idiomaRepository.findOneBy ({ id });
    if (!idioma)
      throw new NotFoundException(`Tutorado ${id} no encontrado`);
    return idioma;

  }

  async remove(id: string) {
    const idioma = await this.findOne(id);
    await this.idiomaRepository.remove(idioma);

  }


  async update(id: string, updateidiomaDto: UpdateIdiomaIdio) {
    const idioma = await this.idiomaRepository.preload({
      id: id,
      ...updateidiomaDto
    });
    if (!idioma) throw new NotFoundException(`Tutorado ${id} no encontrado`)

    try {
      await  this.idiomaRepository.save(idioma)
      return idioma;
      
    } catch (error) {
      console.log(error)
    }

  }


}