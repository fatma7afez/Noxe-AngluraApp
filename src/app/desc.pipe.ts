import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(biography:string,count:number): any {

    return biography.split(",").slice(0,count).join(" ");
  }
  
}
