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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const console_1 = require("console");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(user) {
        const result = await new this.userModel(user).save();
        return result.id;
    }
    async findById(id) {
        try {
            return await this.userModel.findById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('could not found user.');
        }
    }
    async findByUsername(username) {
        try {
            const user = await this.userModel.findOne({
                username,
                active: true,
            });
            if (!user)
                throw new console_1.exception();
            return user;
        }
        catch (error) {
            throw new common_1.NotFoundException('could not found user.');
        }
    }
    async update(id, user) {
        let updateUser;
        try {
            updateUser = await this.userModel.findOneAndUpdate({ _id: id }, user);
        }
        catch (error) {
            throw error;
        }
        finally {
            if (!updateUser) {
                throw new common_1.NotFoundException('could not found user.');
            }
        }
    }
    async remove(user) {
        return user;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map