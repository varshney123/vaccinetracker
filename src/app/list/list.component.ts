import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  dataSource : any;
  displayedColumns : any;
  constructor() { }

  ngOnInit(): void {
    this.displayedColumns= ['centername', 'address', 'block_name', 'fee','available_capacity','min_age_limit','vaccine'];
  }

  showCentreDetails(t:any){
    this.dataSource = t.sessions
  }

}
