import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";


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

  str: string = '';


  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {

  }

  public getAvatarPhotoUrl(userId: number): string {
    this.str = '/api/photo/get-avatar-photo/' + userId;
    return "url(" + this.str + ")";
  }
}
