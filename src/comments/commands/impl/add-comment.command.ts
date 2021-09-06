export class AddCommentCommand {
    constructor(
      public readonly comment: string,
      public readonly personId: string,
    ) {}
  }
  