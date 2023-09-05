import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: { name: any; age: any; job: any; }[] = [];
  @Input() headers: { key: any; label: any; }[] = [];

constructor(){}

ngOnInit(): void {}
}
