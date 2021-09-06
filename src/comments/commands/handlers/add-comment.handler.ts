import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddCommentCommand } from '../impl/add-comment.command';

@CommandHandler(AddCommentCommand)
export class AddCommentHandler implements ICommandHandler<AddCommentCommand> {
  async execute(command: AddCommentCommand) {
    console.log(`AddCommentHandler, personId: ${command.personId}, comment: ${command.comment}`);
  }
}
