import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { }

  id:string="";
  detailstv:any={};


  imgPrefix:string ='https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getDetails('tv',this.id).subscribe((respones)=>{
      this.detailstv = respones;
    })
  
  }

}
