import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ImageService {

  constructor(
    private _http: Http
  ) { }
  createImage(newImg){
    console.log(newImg);
    return this._http.post("/upload", newImg).map(data => data.json()).toPromise()
  }
  getImages(){
    return this._http.get('/images').map(data => data.json()).toPromise()
  }
  deleteImg(id){
    return this._http.delete(`/image/${id}`).map(data => data.json()).toPromise()
  }
}
