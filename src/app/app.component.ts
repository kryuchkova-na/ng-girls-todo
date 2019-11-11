import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
      <h1>
          Welcome to  {{ title }}!
      </h1>
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
      <ul>
          <li *ngFor="let todoItem of todoList">
            <app-todo-item [item]="todoItem"></app-todo-item>
          </li>
      </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'Do this'},
    {title: 'Do that'},
    {title: 'Sleep'},
    {title: 'Drink coffee'},
  ];

  addItem(title: string) {
    this.todoList.push({title});
  }
}
