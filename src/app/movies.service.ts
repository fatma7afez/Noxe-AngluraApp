import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl:string=`https://api.themoviedb.org/3/`

  constructor(private _HttpClient:HttpClient) {};


  getTrending(mediaType:string):Observable<any>{
   return this._HttpClient.get(this.baseUrl+`trending/${mediaType}/week?api_key=9282a6a26058bb924868a59555b39267`)
  };
  getDetails(type:string,id:string):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`${type}/${id}?api_key=9282a6a26058bb924868a59555b39267`);
   };

   getPages(type:string,pageNum:number):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`${type}/popular?api_key=9282a6a26058bb924868a59555b39267&page=${pageNum}`);
   };
   


};
