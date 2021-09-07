import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { AddCommentCommand } from '../impl/add-comment.command';
import { Comment } from '../../models/comment.model';

@CommandHandler(AddCommentCommand)
export class AddCommentHandler implements ICommandHandler<AddCommentCommand> {
  constructor(
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddCommentCommand) {
    console.log(`AddCommentHandler, personId: ${command.personId}, comment: ${command.comment}`);

    const com = this.publisher.mergeObjectContext(new Comment(command.personId, command.comment));
    com.DoSomething();
    com.commit();
  }
}
