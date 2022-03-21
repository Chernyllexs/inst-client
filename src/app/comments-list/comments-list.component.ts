import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../services/comments.service";
import {Comment} from "../model/comment";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentCreate} from "../model/commentCreate";
import {PageEvent} from "@angular/material/paginator";
import {CommentPaginated} from "../model/commentPaginated";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() postId: number = 0;

  commentDto:CommentPaginated = {
    numberOfPages: 0,
    currentPage: 0,
    numberOfComments: 0,
    comments: []
  }


  form: FormGroup;
  commentText: string ='';

  pageSizeOptions: number[] = [5, 10, 25];


  constructor(private commentsService: CommentsService) {
    this.form = new FormGroup({
      comment: new FormControl('')
    })
  }

  ngOnInit(): void {
    /*this.commentsService.getFiveCommentsForPost(this.postId).subscribe(data =>{
      this.comments = data;
    });*/
    this.commentsService.getPaginated(this.postId,this.commentDto.currentPage,this.commentDto.numberOfComments).subscribe(data =>{
      // @ts-ignore
      this.commentDto.comments = data.comments;
      this.commentDto.numberOfComments = data.numberOfComments;
      this.commentDto.currentPage = data.currentPage;
    })

  }


  onChangePage(pe:PageEvent) {
    console.log(pe.pageIndex);
    console.log(pe.pageSize);
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
      // @ts-ignore
      this.commentDto.comments.push(comment);
      if(this.commentDto.comments.length > 5){
        this.commentDto.comments.splice( this.commentDto.comments.length-6,1)
      }
      this.commentText = '';
      /*console.log(comment)*/
    });
    /*console.log(this.comments)*/
  }
}
