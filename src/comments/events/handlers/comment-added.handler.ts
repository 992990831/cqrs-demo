import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { CommentAddedEvent } from '../impl/comment-added.event';

@EventsHandler(CommentAddedEvent)
export class CommentAddedHandler
  implements IEventHandler<CommentAddedEvent> {
  handle(event: CommentAddedEvent) {
    console.log('from comment added event handler...');
  }
}


@EventsHandler(CommentAddedEvent)
export class CommentAddedHandlerII
  implements IEventHandler<CommentAddedEvent> {
  handle(event: CommentAddedEvent) {
    console.log('from comment added event handler II...');
  }
}
