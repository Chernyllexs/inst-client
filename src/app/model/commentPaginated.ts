import {Comment} from "./comment";

export interface CommentPaginated {
  commentsPerPage: number,
  currentPage: number,
  numberOfComments: number,
  comments: Comment[]
}
