import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from "../model/score";
import { Observable } from "rxjs";

@Injectable()
export class ScoresService {
  private scoreUrl: string;

  constructor(private http: HttpClient) {
    this.scoreUrl = 'http://localhost:9000/score';
  }

  public getScoreForPost(postId: number): Observable<Score>{
    return this.http.get<Score>(this.scoreUrl + '/get-number-score-for-post/' + postId);
  }
}
