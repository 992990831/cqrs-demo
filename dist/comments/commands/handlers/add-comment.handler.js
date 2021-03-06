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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommentHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const add_comment_command_1 = require("../impl/add-comment.command");
const comment_model_1 = require("../../models/comment.model");
let AddCommentHandler = class AddCommentHandler {
    constructor(publisher) {
        this.publisher = publisher;
    }
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`AddCommentHandler, personId: ${command.personId}, comment: ${command.comment}`);
            const com = this.publisher.mergeObjectContext(new comment_model_1.Comment(command.personId, command.comment));
            com.DoSomething();
            com.commit();
        });
    }
};
AddCommentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(add_comment_command_1.AddCommentCommand),
    __metadata("design:paramtypes", [cqrs_1.EventPublisher])
], AddCommentHandler);
exports.AddCommentHandler = AddCommentHandler;
//# sourceMappingURL=add-comment.handler.js.map