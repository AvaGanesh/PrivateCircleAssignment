import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TableData } from 'src/app/models/table-data';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  @Input() dataSource: TableData[];
  @Output() openDetails = new EventEmitter();
  sortingOrder = 'ASC';
  sortParameter: string;
  pageSize = 10;
  currentPage = 1;
  displayedColumns: string[] = ['Date', 'Title', 'Entries', 'star'];
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
  }

  pageChange(event: PageEvent) {
    console.log(event.pageIndex);
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
  

  showDetails(element: TableData) {
    this.openDetails.emit(element);
  }

  sort(parmeter: string) {
    (this.sortingOrder === 'ASC') ? this.sortingOrder = 'DESC' : this.sortingOrder = 'ASC';
    this.sortParameter = parmeter;
  }
}
