import { AggregateRoot } from '@nestjs/cqrs';
import { CommentAddedEvent } from '../events/impl/comment-added.event';
export class Comment extends AggregateRoot {
  private readonly id: string;
  private readonly comment: string;

  constructor(_id: string, _comment?: string) {
    super();
    this.id = _id;
    this.comment = _comment;
    //console.log(`constructor model - id: ${this.id}`);
  }

  public DoSomething() {
    // logic
    this.apply(new CommentAddedEvent(this.id, this.comment));
  } 
}
