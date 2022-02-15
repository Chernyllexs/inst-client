import { Component, OnInit } from '@angular/core';
import { Post} from "../model/post";
import {Score} from "../model/score";
import { PostService} from "../services/post.service";
import {ScoresService} from "../services/scores.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  score: Score=<Score>{};

  constructor(private postService: PostService, private scoresService:ScoresService) {
  }

  ngOnInit(): void {
    this.postService.getAllPostsForUser().subscribe(data => {
      this.posts = data;
    });
  }

  public getPhotoUrl(postId: number): string{
    return "http://localhost:9000/photo/get-post-photo/" + postId;
  }

  public getLikes(postId: number): number{
    setTimeout(() => {
      this.postService.getAllPostsForUser().subscribe((data:any) => this.score = new Score(data.numberOfLikes, data.numberOfDislikes));
      console.log('likes ' + this.score.numberOfLikes);
    }, 10000)
    return this.score.numberOfLikes;
  }
}
