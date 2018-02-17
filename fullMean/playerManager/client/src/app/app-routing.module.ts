import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerListComponent } from './manage-player/player-list/player-list.component';
import { AddPlayerComponent } from './manage-player/add-player/add-player.component';

const routes: Routes = [
  { path: '', component: ManagePlayerComponent, children: [
    { path: '', component: PlayerListComponent },
    { path: 'new', component: AddPlayerComponent }
  ] },
  { path: 'status', component: PlayerStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
