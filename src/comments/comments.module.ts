import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommentsController } from './comments.controller';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [CommentsController],
  providers: [
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
  ],
})
export class CommentsModule {}
