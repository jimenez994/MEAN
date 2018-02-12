import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  post: Post;
  constructor(
    private _postService: PostService
  ) { }

  ngOnInit() {
    this.post = new Post();
  }
  onSubmit(){
    this._postService.createPost(this.post);
  }

}
