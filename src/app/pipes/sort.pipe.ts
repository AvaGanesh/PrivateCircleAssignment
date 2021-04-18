import { Pipe, PipeTransform } from '@angular/core';
import { TableData } from '../models/table-data';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: Array<TableData>, sortingOrder: string, sortParameter: string): Array<TableData> {

    if(sortParameter === 'Title' && sortingOrder === 'ASC') {
      values.sort((a, b) => {
        return a[sortParameter] > b[sortParameter] ? 1: -1;
      });
      return values;
    } else if(sortParameter === 'Title' && sortingOrder === 'DESC') {
      values.sort((a, b) => {
        return b[sortParameter] > a[sortParameter] ? 1: -1;
      });
      return values;
    } else if(sortingOrder === 'ASC') {
      values.sort((a, b) => {
        return a[sortParameter] - b[sortParameter];
      });
    } else {
      values.sort((a , b) => {
        return b[sortParameter] - a[sortParameter];
      });
    }



   
    return values;

  }

}
