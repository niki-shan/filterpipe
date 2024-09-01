import { Pipe, PipeTransform } from '@angular/core';
import { Idata } from '../models/data';

@Pipe({
  name: 'studentfilter'
})
export class StudentfilterPipe implements PipeTransform {

  transform(value:Array<Idata>, search : string ): Idata[] {
    console.log(search)
    let filter : Array<Idata>=[]
    
    if(!value){
      return[]
    }
    if(!search){
      return value
    }
    filter=value.filter(ele => {
      return ele.name.toLowerCase().startsWith(search.toLowerCase())
       // return JSON.stringify(val).toLowerCase().includes(searchval.toLowerCase())

    })

     return filter   
  }

}
