import { Pipe, PipeTransform } from '@angular/core';
import { Idata } from '../models/data';

@Pipe({
  name: 'studentfilter'
})
export class StudentfilterPipe implements PipeTransform {

  transform(value:Array<Idata>,searchString : string): Idata[] {
    console.log(searchString)
    let filter : Array<Idata>=[]
    
    if(!value){
      return[]
    }
    if(!searchString){
      return value
    }
    filter=value.filter(ele => {
      return ele.name.toLowerCase().startsWith(searchString.toLowerCase())
    })

     return filter   
  }

}
