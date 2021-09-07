export class CommentAddedEvent {
    constructor(
      public readonly id: string,
      public readonly comment: string,
    ) {}
  }
  