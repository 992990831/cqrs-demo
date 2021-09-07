import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { Comment } from './models/comment.model';
import { GetCommentQuery } from './queries/impl';
import { AddCommentCommand } from './commands/impl/add-comment.command';
import { AddCommentDTO } from './interface/add-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
      ) {}

    @Get()
    async findAll(): Promise<Comment> {
      return this.queryBus.execute(new GetCommentQuery());
    }

    @Post(':id/add')
    async killDragon(@Param('id') id: string, @Body() dto: AddCommentDTO) {
      console.log(`comment controller, json: ${JSON.stringify(dto)}`)
      return this.commandBus.execute(new AddCommentCommand(dto.comment, id));
    }
}
