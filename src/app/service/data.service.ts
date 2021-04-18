import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../models/table-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getJSONData(): Observable<TableData[]> {
    return this.http.get<TableData[]>('./assets/data.json');
  }
}
