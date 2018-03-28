import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class SkillService {

  constructor(
    private _http: Http
  ) { }
  createSkill(newSkill){
    return this._http.post("/skill/create", newSkill).map(data => data.json()).toPromise()
  }
  getSkills(){
    return this._http.get("/skills").map(data => data.json()).toPromise()
  }
  getOneSkill(id){
    return this._http.get(`/skill/${id}`).map(data => data.json()).toPromise()
  }
  deleteSkill(id){
    return this._http.delete(`/skill/delete/${id}`).map(data => data.json()).toPromise()
  }
  update(id,skill){
    return this._http.put(`/skill/update/${id}`, skill).map(data => data.json()).toPromise()
  }
}
