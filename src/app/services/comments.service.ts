import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private postsUrl: string;

  constructor(private http: HttpClient) {
    this.postsUrl = 'http://localhost:9000/comment';
  }

  public getFiveCommentsForPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.postsUrl + '/get-five-last-comment-for-post/' + postId);
  }
}
