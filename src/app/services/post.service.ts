import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "../model/post";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
  private postsUrl: string = '/api/post';


  constructor(private http: HttpClient) {
  }

  public getAllPostsForUser(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + '/get-all-posts-for-user/1');
  }

  public save(user: Post) {
    return this.http.post<Post>(this.postsUrl, user);
  }


}
