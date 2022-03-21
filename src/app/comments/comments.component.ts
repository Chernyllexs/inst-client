import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Comment} from "../model/comment";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  /*comment:Comment = {
    commentId: 0,
    userId: 0,
    commentDate: Date(),
    commentText: ''
  }*/

  /*@Input('commentId') commentId: number = 0;
  @Input('userId') userId: number = 0;
  @Input('commentDate') commentDate: string = '';
  @Input('commentText') commentText: string = '';*/

  @Input() comment:Comment = {
    commentId: 0,
    userId: 0,
    commentDate: '',
    commentText: ''
  }

  str: string = '';


  constructor() {
  }

  ngOnInit(): void {
  }

  public getAvatarPhotoUrl(userId: number): string {
    this.str = '/api/photo/get-avatar-photo/' + userId;
    return "url(" + this.str + ")";
  }
}
