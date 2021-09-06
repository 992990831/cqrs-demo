import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Comment } from './models/comment.model';
import { GetCommentQuery } from './queries/impl';

@Controller('comments')
export class CommentsController {
    constructor(
        private readonly queryBus: QueryBus,
      ) {}

    @Get()
    async findAll(): Promise<Comment> {
      return this.queryBus.execute(new GetCommentQuery());
    }
}
