import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { IdiomaService } from './idioma.service';
import { CreateIdiomaIdio } from './idio/create-idioma.idio';
import { UpdateIdiomaIdio } from './idio/update-idioma.idio';
import { Idioma } from './entities/idioma.entity';

@Controller('idioma')
export class IdiomaController {
  constructor(private readonly idiomaservice: IdiomaService) {}

  @Post()
  create(@Body() createIdiomaidio: CreateIdiomaIdio) {
    return this.idiomaservice.create(createIdiomaidio);
  }

  @Get()
  findAll()  {
    return this.idiomaservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.idiomaservice.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string,  @Body() updateidiomaDto: UpdateIdiomaIdio) {
    return this.idiomaservice.update(id, updateidiomaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.idiomaservice.remove(id);
  }
}