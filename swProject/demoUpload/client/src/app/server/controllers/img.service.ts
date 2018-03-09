import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ImgService {

  constructor(
    private _http: Http
  ) { }
  createImg(newImg){
    console.log(newImg)
    return this._http.post("/upload", newImg)
  }
  getImgs(){
    return this._http.get("/images")
  }
  deleteImg(id){
    return this._http.delete(`/image/${id}`)
  }
}
