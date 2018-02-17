import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  @Output() destroyPlayer = new EventEmitter();

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers(){
    this._playerService.retrivePlayers(
      (players) => {
        this.players = players;
      },
      (err) => {
        console.log(err);
      }
    )
  }


  destroy(id: string){
    this._playerService.destroyPlayer(id, 
      (res) => {
        this.getUsers()
        console.log("you just deleted a player")
      }
  )
  }

}
