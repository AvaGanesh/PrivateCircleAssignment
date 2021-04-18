import { Pipe, PipeTransform } from '@angular/core';
import { TableData } from '../models/table-data';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<TableData>, searchText: string): Array<TableData> {
    if (!values) {
      return [];
    }
    if (!searchText) {
      return values;
    }
    searchText = searchText.toLowerCase();
    return values.filter( it => {
      return it.Title !== null && it.Title.toLowerCase().includes(searchText);
    });
  }

}
