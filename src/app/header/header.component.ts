import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerTrendingMovies: any[]=[];
  imgPrefix:string ='https://image.tmdb.org/t/p/w500';

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    // margin:7,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    // autoHeight:true,
    items:1,
    margin:10,
    autoHeight:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 5
      },
      400: {
        items: 6
      },
      740: {
        items: 7
      },
      940: {
        items: 9
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
