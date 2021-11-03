import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { };

  moviesTrending:any=[];
  tvTrending:any=[];
  peopleTrending:any=[];
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'

  ngOnInit(): void {

    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.moviesTrending= response.results.slice(0,10);
    })

    this._MoviesService.getTrending('tv').subscribe((response)=>{
      this.tvTrending= response.results.slice(0,10);
    })
    this._MoviesService.getTrending('person').subscribe((response)=>{
      this.peopleTrending= response.results.slice(0,10);
    })

  };

};
