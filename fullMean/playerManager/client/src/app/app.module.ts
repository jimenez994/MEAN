import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerListComponent } from './manage-player/player-list/player-list.component';
import { AddPlayerComponent } from './manage-player/add-player/add-player.component';

import { ManagePlayerService } from './manage-player/manage-player.service';
import { PlayerStatusService } from './player-status/player-status.service';
import { PlayerService } from './manage-player/player.service';
import { GameComponent } from './player-status/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagePlayerComponent,
    PlayerStatusComponent,
    PlayerListComponent,
    AddPlayerComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ManagePlayerService,
    PlayerStatusService,
    PlayerService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
