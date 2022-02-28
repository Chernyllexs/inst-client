import { Component, OnInit } from '@angular/core';
import { Post} from "../model/post";

import { PostService } from "../services/post.service";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  loading: boolean = false;


  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(){
    this.loading = true;
    this.postService.getAllPostsForUser().subscribe(data => {
      this.posts = data;
      this.loading = false;
    });
  }


}
