"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const comment_added_event_1 = require("../events/impl/comment-added.event");
class Comment extends cqrs_1.AggregateRoot {
    constructor(_id, _comment) {
        super();
        this.id = _id;
        this.comment = _comment;
    }
    DoSomething() {
        this.apply(new comment_added_event_1.CommentAddedEvent(this.id, this.comment));
    }
}
exports.Comment = Comment;
//# sourceMappingURL=comment.model.js.map