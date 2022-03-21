export interface CommentPaginated {
  numberOfPages: number,
  currentPage: number,
  numberOfComments: number,
  comments: Comment[]
}
