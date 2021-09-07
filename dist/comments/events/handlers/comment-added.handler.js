"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAddedHandlerII = exports.CommentAddedHandler = void 0;
const events_handler_decorator_1 = require("@nestjs/cqrs/dist/decorators/events-handler.decorator");
const comment_added_event_1 = require("../impl/comment-added.event");
let CommentAddedHandler = class CommentAddedHandler {
    handle(event) {
        console.log('from comment added event handler...');
    }
};
CommentAddedHandler = __decorate([
    (0, events_handler_decorator_1.EventsHandler)(comment_added_event_1.CommentAddedEvent)
], CommentAddedHandler);
exports.CommentAddedHandler = CommentAddedHandler;
let CommentAddedHandlerII = class CommentAddedHandlerII {
    handle(event) {
        console.log('from comment added event handler II...');
    }
};
CommentAddedHandlerII = __decorate([
    (0, events_handler_decorator_1.EventsHandler)(comment_added_event_1.CommentAddedEvent)
], CommentAddedHandlerII);
exports.CommentAddedHandlerII = CommentAddedHandlerII;
//# sourceMappingURL=comment-added.handler.js.map