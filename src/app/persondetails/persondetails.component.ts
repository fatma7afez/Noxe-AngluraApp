import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { }

  id:string='';
  detailsPerson:any={};
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'



  ngOnInit(): void {

   this.id = this._ActivatedRoute.snapshot.params.id;
   this._MoviesService.getDetails('person',this.id).subscribe((response)=>{
    this.detailsPerson=response;
  })

  }

}
