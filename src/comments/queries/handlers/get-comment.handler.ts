import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCommentQuery } from '../impl';
import { Comment } from '../../models/comment.model';

@QueryHandler(GetCommentQuery)
export class GetCommentsHandler implements IQueryHandler<GetCommentQuery, Comment> {
  
  async execute(query: GetCommentQuery) {
    return new Comment('1');
  }
}
