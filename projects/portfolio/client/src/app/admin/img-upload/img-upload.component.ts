import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from "../../server/controllers/image.service";
import { Image } from "../../server/models/image";
import { User } from '../../server/models/user';
import { UserService } from '../../server/controllers/user.service';
@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent implements OnInit {
  img: any;
  image: Image = new Image;
  currentUser: User = null;
  @Input() images;
  @Output() destroyImageEvent = new EventEmitter();
  @Output() createNewImageEvent = new EventEmitter()
  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  onUploadStatus($event) {
    this.img = $event
  }

  uploadImg(){
    this.image.name = this.img['file'].name
    this.image.src = this.img.src
    this.createNewImageEvent.emit(this.image);
    this.image = new Image();
    this.img = "";
  }
  deleteImg(id) {
    this.destroyImageEvent.emit(id);
  }
  // getUserSession(){
  //   this._userService.getCurrentUser().subscribe(
  //     res => {
  //       this.currentUser = res.json()
  //       if(this.currentUser == null){
  //         this._router.navigateByUrl('/');
  //       }
  //     }
  //   )
  // }

}
