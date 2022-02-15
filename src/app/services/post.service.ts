import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "../model/post";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
  private postsUrl: string;

  constructor(private http: HttpClient) {
    this.postsUrl = 'http://localhost:9000/post';
  }

  public getAllPostsForUser(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + '/get-all-posts-for-user/1');
  }

  public save(user: Post) {
    return this.http.post<Post>(this.postsUrl, user);
  }


}
