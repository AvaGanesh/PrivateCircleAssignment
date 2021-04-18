import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/models/table-data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableData: TableData[];
  searchText: string;
  sortingOrder = 'ASC';
  sortParameter = 'Date';
  selectedItemDetails: TableData;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getJSONData().subscribe((res) => {
      this.tableData = res;
      console.log(res);
    })
  }

  showDetails(event: TableData) {
    this.selectedItemDetails = event;
  }

}
