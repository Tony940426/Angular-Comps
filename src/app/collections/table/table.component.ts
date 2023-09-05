import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: { name: string; age: number; job: string; }[] = [];
  @Input() headers: { key: string; label: string; }[] = [];

constructor(){}

ngOnInit(): void {}
}
