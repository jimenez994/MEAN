import { Component, OnInit } from '@angular/core';
import { Image } from '../server/models/image';
import { UserService } from '../server/controllers/user.service';
import { ImageService } from '../server/controllers/image.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  images: Array<Image> = [];

  constructor(
    private _userService: UserService,
    private _imageService: ImageService
  ) { }

  ngOnInit() {
    this.getImages()
  }
  getImages(){
    this._imageService.getImages()
    .then(images => this.images = images)
    .catch(err => console.log(err))
  }
  uploadImg(image:Image){
    this._imageService.createImage(image)
    .then(status => this.getImages())
    .catch(err => console.log(err))
  }
  destroyImg(id){
    this._imageService.deleteImg(id)
    .then(status => this.getImages())
    .catch(err => console.log(err))
  }

}
