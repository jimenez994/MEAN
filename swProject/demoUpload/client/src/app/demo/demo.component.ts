import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgService } from '../server/controllers/img.service';
import { ImgModel } from '../server/models/img-model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  image: ImgModel =  new ImgModel
  img: any

  imgList: any
  constructor(
    private _router: Router,
    private _imgService: ImgService
  ) { }

  ngOnInit() {
    this.showImgs()
  }

  onUploadStatus($event){
    this.img = $event
  }

  uploadImg(data){
    this.img['type']=data.type
    console.log(this.img)
    this._imgService.createImg(this.img).subscribe(
      (res) => {
        console.log(res.json())
      }
    )
    this.image = new ImgModel
  }
  showImgs(){
    this._imgService.getImgs().subscribe(
      res => {
        this.imgList = res.json()
      }
    )
  }
  deleteImg(id){
    this._imgService.deleteImg(id).subscribe(
      res => {
        console.log("deleted")
      }
    )
  }

}
