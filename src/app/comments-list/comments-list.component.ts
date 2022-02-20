import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../services/comments.service";
import {Comment} from "../model/comment";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() postId: number = 0;
  comments: Comment[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getFiveCommentsForPost(this.postId).subscribe(data =>{
      this.comments = data;
    });
  }
}
