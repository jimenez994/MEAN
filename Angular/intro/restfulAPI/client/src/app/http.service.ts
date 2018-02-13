import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getTask();
   }
   getTasks(){
    //  let tempObservable = this._http.get('/tasks');
    //  tempObservable.subscribe(data => console.log(
    //    "Got our tasks!",data));
    return this._http.get('/tasks')
   }
  //  getTask(){
  //    let tempObservable = this._http.get('/tasks/5a82006163043433febf8b0c');
  //    tempObservable.subscribe(data => console.log(
  //      "Got some task", data));
  //    console.log("Hey you there is something")
  //  }

}
