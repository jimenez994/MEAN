import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: Player;

  constructor(
    private _playerService: PlayerService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.player = new Player();    
  }

  onSubmit(){
    this._playerService.createPlayer(this.player,
      (player) => {
        this._router.navigateByUrl('/')
        console.log("you created a player")

      },
      (err) => {
        console.log(err);
      }
    )
  }

}
