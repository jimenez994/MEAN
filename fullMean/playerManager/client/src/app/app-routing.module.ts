import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerListComponent } from './manage-player/player-list/player-list.component';
import { AddPlayerComponent } from './manage-player/add-player/add-player.component';
import { GameComponent } from './player-status/game/game.component';

const routes: Routes = [
  { path: '', component: ManagePlayerComponent, children: [
    { path: '', component: PlayerListComponent },
    { path: 'new', component: AddPlayerComponent }
  ] },
  { path: 'status', component: PlayerStatusComponent, children: [
    {path: '', component: GameComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
