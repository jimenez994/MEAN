import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostNewComponent } from './post/post-new/post-new.component';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
  {path: 'post', component: PostComponent, children: [
    // localhost:8001/post
    { path: '', pathMatch: 'full', component: PostListComponent },
    // localhost:8001/post/new
    { path:'new', component: PostNewComponent }
  ]},
  { path: '', pathMatch: 'full', component: PostComponent, children: [
    { path: '',pathMatch: 'full', component: PostNewComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
