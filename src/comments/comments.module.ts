import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommentsController } from './comments.controller';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [CommentsController],
  providers: [
    ...QueryHandlers,
    ...CommandHandlers,
  ],
})
export class CommentsModule {}
