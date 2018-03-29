import { Component, OnInit } from '@angular/core';
import { Image } from '../server/models/image';
import { UserService } from '../server/controllers/user.service';
import { ImageService } from '../server/controllers/image.service';
import { User } from '../server/models/user';
import { Router } from '@angular/router';
import { SkillService } from '../server/controllers/skill.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  images: Array<Image> = [];
  currentUser: User = null

  constructor(
    private _userService: UserService,
    private _imageService: ImageService,
    private _stackService: SkillService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getImages()
    this.getUser()
  }
  updateUser(user:User){
    this._userService.update(user)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  getUser(){
    this._userService.getCurrentUser()
    .then(user => {if (user == null) {
      this._router.navigateByUrl("/admin")
    }else{
      this.currentUser = user
    }
  })
    .catch(err => console.log(err))
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
  getStacks(){
    
  }

}
