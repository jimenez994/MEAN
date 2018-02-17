import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

@Injectable()
export class PlayerService {

  players: Player[];

  constructor(
    private _http: Http
  ) { }

  createPlayer(player, callback, errorback){
    this._http.post('/player', player).subscribe(
      (res) => {
        const player = res.json();
        console.log("nice you created a player")
        callback(player);
      },
      (err) => {
        errorback(err.json());
      }
    )
  }
  retrivePlayers(callback, errorback){
    this._http.get('/player').subscribe(
      (res) => {
        this.players = res.json();
        callback(this.players);
      },
      (err) => {
        errorback(err.json());
      }
    )
  }

}
