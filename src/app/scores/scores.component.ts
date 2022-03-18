import {Component, Input, OnInit} from '@angular/core';
import {ScoresService} from "../services/scores.service";
import {Score} from "../model/score";
import {ScoreAdd} from "../model/scoreAdd";

export interface UserStateScore {
  isLiked: boolean,
  isDisliked: boolean,
  dislikeBtnColor: string,
  likeBtnColor: string
}

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  @Input() postId: number = 0;
  userId: number = 1;
  redColor = 'red';

  scores: Score = {
    numberOfLikes: 0,
    numberOfDislikes: 0
  }

  userStateScore: UserStateScore = {
    isLiked: false,
    isDisliked: false,
    dislikeBtnColor: '',
    likeBtnColor: ''
  }


  constructor(private scoresService: ScoresService) {
  }

  ngOnInit(): void {
    this.scoresService.getScoreForPost(this.postId).subscribe(data => {
      this.scores = data;
    });

    this.scoresService.getUserScoreForPost(this.postId, this.userId).subscribe(scoreState => {
      if (scoreState) {
        this.userStateScore.isLiked = true;
        this.userStateScore.likeBtnColor = this.redColor;
      } else {
        this.userStateScore.isDisliked = true;
        this.userStateScore.dislikeBtnColor = this.redColor;
      }
    });
  }

  addScore(isLiked: boolean) {
    if (isLiked === this.userStateScore.isLiked && !isLiked === this.userStateScore.isDisliked) {
      this.scoresService.deleteUserScoreForPost(this.postId, this.userId).subscribe(response => {
        this.scores = response;
        this.resetLike();
        this.resetDislike();
      });
    } else {
      let scoreAdd: ScoreAdd = {
        postId: this.postId,
        userId: this.userId,
        scoreState: isLiked
      }

      this.scoresService.addScore(scoreAdd).subscribe(data => {
        if (data.scoreState) {
          if(this.userStateScore.isDisliked){
            this.resetDislike();
            this.scores.numberOfDislikes --;
          }
          this.userStateScore.isLiked = true;
          this.userStateScore.likeBtnColor = this.redColor;
          this.scores.numberOfLikes ++;
        } else {
          if(this.userStateScore.isLiked){
            this.resetLike();
            this.scores.numberOfLikes --;
          }
          this.userStateScore.isDisliked = true;
          this.userStateScore.dislikeBtnColor = this.redColor;
          this.scores.numberOfDislikes ++;
        }
      });
    }
  }

  public resetLike(){
    this.userStateScore.isLiked = false;
    this.userStateScore.likeBtnColor = '';
  }

  public resetDislike(){
    this.userStateScore.isDisliked = false;
    this.userStateScore.dislikeBtnColor = '';
  }
}
