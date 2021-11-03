import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tirm'
})
export class TirmPipe implements PipeTransform {

  transform(overview:string,count:number): any {

    if( count == 1 ){
      return overview.split(",").slice(0,count).join(" ");

    } 
    else{
      return overview.split(",").slice(1,count).join(" ");

    }
  }

  
}
