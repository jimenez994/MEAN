import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Post } from './post';

@Injectable()
export class PostService {
  posts: Post[];
  constructor(
    private _http: Http
  ) { 
  }

  createPost(post, callback, errorback) {
    this._http.post('/posts', post).subscribe(
      (res) => {
        const post =res.json();
        console.log(post)
        // this.posts.push(post);
        callback(post);
      },
      (err) => {
        errorback(err.json());
      }
    )}
  retrivePosts(callback, errorback){
    this._http.get('/posts').subscribe(
      (res) => {
        this.posts = res.json();
        callback(this.posts);
      },
      (err) => {
        errorback(err.json());

      }
    )
  }

}
