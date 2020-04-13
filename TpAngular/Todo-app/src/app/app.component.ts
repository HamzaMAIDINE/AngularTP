import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';

  todos= [
    {
      label: 'Bring Milk',
      priority: 3,
      done: false
    },
    {
      label: 'Pay mobile bil',
      priority: 1,
      done: true
    },
    {
      label: 'Clean house',
      priority: 4,
      done: false
    },
    {
      label: 'Fix the bulb',
      priority: 5,
      done: false
    },
    {
      label: 'Call Sam',
      priority: 1,
      done: false
    }
  ];

  addTodo(newLabel){
    var newTodo={
      label: newLabel,
      priority: 2,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo){
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
}
