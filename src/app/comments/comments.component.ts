import {Component, ElementRef, Input, OnInit} from '@angular/core';


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
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = this.getAvatarPhotoUrl(this.userId);
  }

  public getAvatarPhotoUrl(userId: number): string {
    this.str = 'http://localhost:9000/photo/get-avatar-photo/' + userId;
    return "url(" + this.str + ")";
    /*return "url('https://material.angular.io/assets/img/examples/shiba1.jpg')";*/
   /* return "";*/
  }
}
