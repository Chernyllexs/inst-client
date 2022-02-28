import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../services/comments.service";
import {Comment} from "../model/comment";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentCreate} from "../model/commentCreate";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() postId: number = 0;
  comments: Comment[] = [];

  form: FormGroup;
  commentText: string ='';

  constructor(private commentsService: CommentsService) {
    this.form = new FormGroup({
      comment: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.commentsService.getFiveCommentsForPost(this.postId).subscribe(data =>{
      this.comments = data;
    });
  }

  submit() {
    const formData = {... this.form.value}
    console.log(formData)

  }

  addComment(userId: number) {
    if(!this.commentText.trim()){
      return
    }
    let newComment: CommentCreate ={
      postId: this.postId,
      userId: userId,
      commentText: this.commentText
    }
    this.commentsService.addComment(newComment).subscribe(comment =>{
      this.comments.push(comment);
      if(this.comments.length > 5){
        this.comments.splice( this.comments.length-6,1)
      }
      this.commentText = '';
      /*console.log(comment)*/
    });
    /*console.log(this.comments)*/
  }
}
