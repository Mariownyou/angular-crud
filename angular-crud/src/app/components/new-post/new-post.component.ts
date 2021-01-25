import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service'

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post: Post = {
    title: '',
    content: '',
    isNews: false
  }
  submitted = false

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    const data = {
      title: this.post.title,
      content: this.post.content
    }

    this.postService.create(data)
      .subscribe(
        response => {
          console.log(response)
          this.submitted = true
        },
        error => {
          console.log(error)
        })
  }

  newPost(): void {
    this.submitted = false
    this.post = {
      title: '',
      content: '',
      isNews: false
    }
  }

}
