import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `<h1>{{title}}</h1>
    <input  #inputElementRef
            [value]="title"
            (keyup.enter)="changeTitle($event.target.value)">
    <button (click)="changeTitle(inputElementRef)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World!';

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}
