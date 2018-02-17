import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';
import { Observable } from 'rxjs/Observable';
import "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class PlayerService {

  players: Player[];
  player: Player

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

  destroyPlayer(id: string, callback){
    this._http.delete(`/player/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }
  update(player){
    console.log("player service update")
    return this._http.put(`/player/${player._id}`,player)
  }
}

