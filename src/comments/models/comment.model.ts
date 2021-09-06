export class Comment {
  private readonly id: string;
  constructor(_id: string) {
    this.id = _id;
    console.log(`constructor model - id: ${this.id}`);
  }
}
