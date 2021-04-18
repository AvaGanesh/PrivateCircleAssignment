import { Component, Input, OnInit } from '@angular/core';
import { TableData } from 'src/app/models/table-data';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  @Input() itemDetails: TableData;
  constructor() { }

  ngOnInit(): void {
  }

}
