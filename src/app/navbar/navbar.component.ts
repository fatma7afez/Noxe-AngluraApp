import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isLogin:boolean = false;
  userData:any=""

  constructor(public _AuthService:AuthService) { }

  ngOnInit(): void {

   this._AuthService.userData.subscribe(()=>{
     if(this._AuthService.userData.getValue() != null){
       this.isLogin=true;
       this.userData=this._AuthService.userData.getValue() ;
     }
     else{
      this.isLogin=false;
     }
   });
  };

  logOut(){
    this. _AuthService.logOut()
  }



}
