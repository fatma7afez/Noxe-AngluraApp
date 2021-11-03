import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  tvTrending:any=[]; 
  currentPage:number= 1;
  totalItems:number=0;
   imgPrefix:string ='https://image.tmdb.org/t/p/w500'


  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
   this.displayTvShows(1)
  }

  displayTvShows(pageNum:number){
    this._MoviesService.getPages('tv',pageNum).subscribe((response)=>{
      this.tvTrending= response.results;
      this.totalItems= response.total_results

    })
  }
  pageChanged(e:any){
    this.displayTvShows(e.page)
  }

}
