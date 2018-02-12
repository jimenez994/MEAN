import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostService {
  posts: Post[];
  constructor() { 
    this.posts = [];
  }

  createPost(post) {

    this.posts.push(post)
    console.log(this.posts);
  }
  retrivePosts(){
    return this.posts
  }

}
