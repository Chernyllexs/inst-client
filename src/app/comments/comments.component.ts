import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input('commentId') commentId: number = 0;
  @Input('userId') userId: number = 0;
  @Input('commentDate') commentDate: string = '';
  @Input('commentText') commentText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
