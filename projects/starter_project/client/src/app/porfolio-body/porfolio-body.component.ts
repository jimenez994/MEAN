import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porfolio-body',
  templateUrl: './porfolio-body.component.html',
  styleUrls: ['./porfolio-body.component.scss']
})
export class PorfolioBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onload();
  }
  onload(){
    console.log("will")
  }
}
