import { Http, HttpModule, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteService {

  url = "http://localhost:3000/favorites";

  constructor(private http: Http) { }

  toWatchList(object){
    
    const obj = object ;
    const jsonobj=JSON.stringify(obj)
    this.http.post(this.url,obj).subscribe(res=>{});
    console.log("written to favorites")
   console.log(obj);
    console.log(jsonobj);
  }
}
