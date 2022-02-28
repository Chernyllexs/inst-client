import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";
import {Observable} from "rxjs";
import {CommentCreate} from "../model/commentCreate";
import {Score} from "../model/score";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private postsUrl: string = '/api/comment';

  constructor(private http: HttpClient) {
  }

  public getFiveCommentsForPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>( this.postsUrl + '/get-five-last-comment-for-post/' + postId);
  }

  public addComment(newComment: CommentCreate) : Observable<Comment>  {
    return this.http.post<Comment>( this.postsUrl + '/create-comment', newComment);
  }
}
