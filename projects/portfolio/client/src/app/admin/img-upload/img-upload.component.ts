import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent implements OnInit {
  image
  constructor() { }

  ngOnInit() {
  }
  onUploadStatus($event) {
    this.image = $event
  }

  uploadImg(){
    console.log(this.image)
    console.log(this.image['file'].name)
    
  }

}
