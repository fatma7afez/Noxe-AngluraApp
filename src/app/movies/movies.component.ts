import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesTrending:any=[];
  currentPage:number= 1;
  totalItems:number=0;

  imgPrefix:string ='https://image.tmdb.org/t/p/w500'


  constructor(private _MoviesService:MoviesService) {
    
   }

  ngOnInit(): void {
    this.displayMovies(1)
  }

  displayMovies(pageNum:number){
    this._MoviesService.getPages('movie',pageNum).subscribe((response)=>{
      this.moviesTrending= response.results;
      this.totalItems= response.total_results
    })
  }
  pageChanged(e:any){
    this.displayMovies(e.page)
  }

}
