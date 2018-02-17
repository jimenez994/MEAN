import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../manage-player/player.service';
import { Player } from '../../manage-player/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players: Player[]

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getPlayers()
  }
  getPlayers(){
    this._playerService.retrivePlayers(
      (players) => {
        this.players = players;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
