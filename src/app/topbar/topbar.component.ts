import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
  }
searchText="";
handlekeyup(){
  this.movieService.searchMovies(this.searchText).then((res:any)=>{
    console.log(res);
    this.movieService.movies = res.results;
  }).catch(err=>{
    console.log(err);
  })
  }
}
