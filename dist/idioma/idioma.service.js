"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaService = void 0;
const common_1 = require("@nestjs/common");
const idioma_entity_1 = require("./entities/idioma.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let IdiomaService = class IdiomaService {
    constructor(idiomaRepository) {
        this.idiomaRepository = idiomaRepository;
        this.logger = new common_1.Logger('IdiomaService');
    }
    async create(createidiomaDto) {
        try {
            const idioma = this.idiomaRepository.create(createidiomaDto);
            await this.idiomaRepository.save(idioma);
            return idioma;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return this.idiomaRepository.find({});
    }
    async findOne(id) {
        const idioma = await this.idiomaRepository.findOneBy({ id });
        if (!idioma)
            throw new common_1.NotFoundException(`Tutorado ${id} no encontrado`);
        return idioma;
    }
    async remove(id) {
        const idioma = await this.findOne(id);
        await this.idiomaRepository.remove(idioma);
    }
    async update(id, updateidiomaDto) {
        const idioma = await this.idiomaRepository.preload(Object.assign({ id: id }, updateidiomaDto));
        if (!idioma)
            throw new common_1.NotFoundException(`Tutorado ${id} no encontrado`);
        try {
            await this.idiomaRepository.save(idioma);
            return idioma;
        }
        catch (error) {
            console.log(error);
        }
    }
};
IdiomaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(idioma_entity_1.Idioma)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IdiomaService);
exports.IdiomaService = IdiomaService;
//# sourceMappingURL=idioma.service.js.map