import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from "../model/score";
import { Observable } from "rxjs";
import {ScoreAdd} from "../model/scoreAdd";

@Injectable()
export class ScoresService {
  private scoreUrl: string;

  constructor(private http: HttpClient) {
    this.scoreUrl = 'api/score';
  }

  public getScoreForPost(postId: number): Observable<Score>{
    return this.http.get<Score>(this.scoreUrl + `/get-number-score-for-post/${postId}`);
  }

 /* public addScore(score: ScoreAdd): Observable<Score> {
    return this.http.post<Score>(this.scoreUrl + '/add-score/',score);
  }
*/
  public addScore(score: ScoreAdd): Observable<ScoreAdd> {
    return this.http.post<ScoreAdd>(this.scoreUrl + '/add-score/',score);
  }

  public getUserScoreForPost(postId: number, userId: number): Observable<boolean>{
    /*return this.http.get<boolean>(this.scoreUrl + '/get-user-score-for-post/${postId}/${userId}');*/
    //return this.http.get<boolean>(this.scoreUrl + '/get-user-score-for-post/' + postId + '/' + userId);
    return this.http.get<boolean>(this.scoreUrl + `/get-user-score-for-post/${postId}/${userId}`);
  }

  public deleteUserScoreForPost(postId: number, userId: number): Observable<Score>{
    return this.http.delete<Score>(this.scoreUrl + `/delete-user-score-for-post/${postId}/${userId}`)
  }
}
