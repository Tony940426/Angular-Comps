import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})

export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'James', age: 24, job: 'Designed'},
    {name: 'Jill', age: 26, job: 'Engineer'},
    {name: 'Bob', age: 22, job: 'UX Designer'}
  ];

  headers = [
    {key: 'name', label: 'name'},
    {key: 'age', label: 'age'},
    {key: 'job', label: 'job'}
  ];

  constructor(){}

  ngOnInit(): void {}
}
