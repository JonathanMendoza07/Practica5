"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaModule = void 0;
const common_1 = require("@nestjs/common");
const idioma_service_1 = require("./idioma.service");
const idioma_controller_1 = require("./idioma.controller");
const typeorm_1 = require("@nestjs/typeorm");
const idioma_entity_1 = require("./entities/idioma.entity");
let IdiomaModule = class IdiomaModule {
};
IdiomaModule = __decorate([
    (0, common_1.Module)({
        controllers: [idioma_controller_1.IdiomaController],
        providers: [idioma_service_1.IdiomaService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                idioma_entity_1.Idioma
            ])]
    })
], IdiomaModule);
exports.IdiomaModule = IdiomaModule;
//# sourceMappingURL=idioma.module.js.map