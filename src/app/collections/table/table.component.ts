import { Component, OnInit, Input } from '@angular/core';
type RecordKey = 'name' | 'age' | 'job';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: { name: any; age: any; job: any; }[] = [];
  @Input() headers: { key: RecordKey; label: string; }[] = [];

constructor(){}

ngOnInit(): void {}
}
