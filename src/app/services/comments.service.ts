import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";
import {Observable} from "rxjs";
import {CommentCreate} from "../model/commentCreate";
import {Score} from "../model/score";
import {CommentPaginated} from "../model/commentPaginated";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentUrl: string = '/api/comment';

  constructor(private http: HttpClient) {
  }

  public getFiveCommentsForPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>( this.commentUrl + `/get-five-last-comment-for-post/${postId}`);
  }

  public addComment(newComment: CommentCreate) : Observable<Comment>  {
    return this.http.post<Comment>( this.commentUrl + '/create-comment', newComment);
  }

  public getPaginatedDefault(postId:number): Observable<CommentPaginated>{
    return this.http.get<CommentPaginated>(this.commentUrl + `/get-paginated/${postId}`)
  }

  public getPaginated(postId:number, pageNo:number, pageSize:number,): Observable<CommentPaginated>{
    return this.http.get<CommentPaginated>(this.commentUrl + `/get-paginated/${postId}/${pageNo}/${pageSize}`)
  }
}
