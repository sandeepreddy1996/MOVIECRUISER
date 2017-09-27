import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  favorites = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(`http://localhost:3000/favorites`).subscribe(res => {
      this.favorites = res.json();
      // console.log("json",res.json());
      console.log("Fav_id",this.favorites[0].id);
    });
    
  }

  removeFromFav(id){
    this.http.delete("http://localhost:3000/favorites/"+ String(id)).subscribe(res => {});
    console.log("http://localhost:3000/favorites/"+ String(id));
  }

}
