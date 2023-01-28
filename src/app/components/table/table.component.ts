import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('dataTable') dataTable: any
  displayedColumns: string[] = ['accIndex_Name_AR', 'accIndex_Name_EN', 'accIndex_Number'];

  // dataSource2: any = []
  dataSource2 = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change data table ", changes);
    this.dataSource2 = changes['dataTable'].currentValue



  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource2.filter = filterValue.trim().toLowerCase();
  // }
}
