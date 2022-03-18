import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../services/post.service";
import {PostCreate} from "../model/postCreate";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  form: FormGroup;
  fileName: string = '';

  constructor(private postService: PostService) {
    this.form = new FormGroup({
      postText: new FormControl(''),
      file: new FormControl(null)
    })
  }

  ngOnInit(): void {

  }

  submit() {

    const formData = {...this.form.value}
    console.log(formData)
  }

  selectFile($event: Event) {

  }

  onFileSelected($event: Event) {
    // @ts-ignore
    const file: File = event.target.files[0];

    //const formDto = {...this.form.value}
    let formDto: PostCreate =  {
      userId: 1,
      postText: 'string'
    }

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', formDto.userId.toString());
      formData.append('postText', formDto.postText);
      this.postService.createPost(formData).subscribe(post =>{
        console.log(post)
      });
    }
  }
}
