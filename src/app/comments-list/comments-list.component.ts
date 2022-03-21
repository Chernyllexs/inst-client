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

  commentDto: CommentPaginated = {
    commentsPerPage: 5,
    currentPage: 0,
    numberOfComments: 0,
    comments: []
  }

  array: Comment[] | undefined

  form: FormGroup;
  commentText: string = '';

  pageSizeOptions: number[] = [5, 10, 25];


  constructor(private commentsService: CommentsService) {
    this.form = new FormGroup({
      comment: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.loadComments(this.postId, this.commentDto.currentPage, this.commentDto.commentsPerPage);

  }


  onChangePage(pe: PageEvent) {
    this.commentDto.currentPage = pe.pageIndex;
    this.commentDto.commentsPerPage = pe.pageSize;
    this.loadComments(this.postId, this.commentDto.currentPage, this.commentDto.commentsPerPage);
  }

  loadComments(postId: number, pageNo: number, pageSize: number) {
    this.commentsService.getPaginated(postId, pageNo, pageSize).subscribe(data => {
      this.commentDto = data;
      // @ts-ignore
      this.array = data.comments;
    })
  }

  /*
    submit() {
      const formData = {...this.form.value}
      console.log(formData)
    }
    */

  addComment(userId: number) {
    if (this.commentText.trim().length < 3) {
      return
    }
    let newComment: CommentCreate = {
      postId: this.postId,
      userId: userId,
      commentText: this.commentText
    }
    this.commentsService.addComment(newComment).subscribe(comment => {
      // @ts-ignore
      this.commentDto.comments.push(comment);
      if (this.commentDto.comments.length > this.commentDto.commentsPerPage) {
        this.commentDto.currentPage++;
        this.loadComments(this.postId, this.commentDto.currentPage, this.commentDto.commentsPerPage);
      }
      this.commentText = '';
    });
  }

  submit() {

  }
}
