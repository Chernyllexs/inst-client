import {Component, Input, OnInit} from '@angular/core';
import {Score} from "../model/score";
import {ScoresService} from "../services/scores.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  score: Score | undefined;
  numberOfLikes: number | undefined = 0;
  numberOfDislikes: number | undefined = 0;

  @Input() postId: number = 0;

  constructor(private scoresService:ScoresService) { }

  ngOnInit(): void {
    this.scoresService.getScoreForPost(this.postId).subscribe(data => {
      this.numberOfLikes = data.numberOfLikes;
      this.numberOfDislikes = data.numberOfDislikes;
    });

  }






}
