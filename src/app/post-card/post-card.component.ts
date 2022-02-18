import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../model/post";
import {Score} from "../model/score";
import { PostService } from "../services/post.service";
import { ScoresService } from "../services/scores.service";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input('postId') postId: number = 0;
  @Input('userId') userId: number = 0;
  @Input('photoId') photoId: number = 0;
  @Input('postText') postText: string = 'null';
  @Input('postDate') postDate: string = 'null';



  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  public getPhotoUrl(postId: number): string{
    return "http://localhost:9000/photo/get-post-photo/" + postId;
  }

}
