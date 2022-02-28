import {Component, Input, OnInit} from '@angular/core';
import {ScoresService} from "../services/scores.service";
import {ScoreAdd} from "../model/scoreAdd";
import {error} from "@angular/compiler/src/util";
import {Score} from "../model/score";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  @Input() postId: number = 0;

  scores: Score = {
    numberOfLikes: 0,
    numberOfDislikes: 0
  }

  dislikeBtnColor: string = '';
  likeBtnColor: string = '';
  scoreIsAdded: boolean = false;

  userId: number = 1;

  constructor(private scoresService: ScoresService) {
  }

  ngOnInit(): void {
    this.scoresService.getScoreForPost(this.postId).subscribe(data => {
      this.scores = data;
    });

    this.scoresService.getUserScoreForPost(this.postId, this.userId).subscribe(data => {
      this.colorBtnScore(data);
      this.scoreIsAdded = true;
    }, error => {

    });
  }

  addScore(state: boolean, userId: number) {
    let scoreAdd: ScoreAdd = {
      postId: this.postId,
      userId: userId,
      scoreState: state
    }
    this.scoresService.addScore(scoreAdd).subscribe(data => {
      this.colorBtnScore(data.scoreState);
      if (data.scoreState) {
        this.setLike();
        this.scores.numberOfLikes++;
        if(this.scoreIsAdded){
          this.scores.numberOfDislikes--;
        }
      } else {
        this.setDislike();
        this.scores.numberOfDislikes++;
        if(this.scoreIsAdded){
          this.scores.numberOfLikes--;
        }
      }
    });

  }


  colorBtnScore(state: boolean) {
    if (state) {
      this.setLike();

    } else {
      this.setDislike();
    }
  }

  setLike() {
    this.likeBtnColor = 'red';
    this.dislikeBtnColor = '';
  }

  setDislike() {
    this.likeBtnColor = '';
    this.dislikeBtnColor = 'red';
  }
}
