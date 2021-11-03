import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  peopleTrending:any=[];
  currentPage:number= 1;
  totalItems:number=0;
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'
  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this.displayPeople(1)
    
  }

  displayPeople(pageNum:number){
    this._MoviesService.getPages('person',pageNum).subscribe((response)=>{
      this.peopleTrending= response.results;
      this.totalItems= response.total_results

    })
  }
  pageChanged(e:any){
    this.displayPeople(e.page)
  }
}
