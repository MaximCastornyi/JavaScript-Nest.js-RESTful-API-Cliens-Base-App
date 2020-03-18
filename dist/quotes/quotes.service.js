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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let QuotesService = class QuotesService {
    constructor(quoteModel) {
        this.quoteModel = quoteModel;
    }
    async getQuotes() {
        return await this.quoteModel.find().exec();
    }
    async getQuote(id) {
        try {
            return await this.quoteModel.findById(id).exec();
        }
        catch (err) {
            throw new common_1.HttpException('Quote Not Found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    createQuote(quote) {
        const newQuote = new this.quoteModel(quote);
        return newQuote.save();
    }
    async updateQuote(id, updateQuoteDto) {
        return await this.quoteModel.findByIdAndUpdate(id, updateQuoteDto, {
            new: true,
        });
    }
    async deleteQuote(id) {
        return await this.quoteModel.findByIdAndRemove(id);
    }
};
QuotesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Quote')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], QuotesService);
exports.QuotesService = QuotesService;
//# sourceMappingURL=quotes.service.js.map