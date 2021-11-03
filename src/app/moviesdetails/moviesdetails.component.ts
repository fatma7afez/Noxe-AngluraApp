import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { }

  id:string='';
  detailsMovie:any={};


  imgPrefix:string ='https://image.tmdb.org/t/p/w500'

  ngOnInit(): void {
   this.id = this._ActivatedRoute.snapshot.params.id;

   this._MoviesService.getDetails('movie',this.id).subscribe((response)=>{
     this.detailsMovie=response;
   })
  };

};
