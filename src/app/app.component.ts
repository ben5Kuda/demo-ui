import { Component, computed, effect, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { TodoService, Weather } from './services/http.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
//import { MaterialModule} from '@angular/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    CommonModule,
    //MaterialModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hexham';
  todos: Weather[] = [];
  companyName = 'Hexham Express';
  amount = signal(10);
  value = signal(5);
  names = ['jones', 'henry'];
  index = 0;
  newTodo = '';

  total = computed(() => {
    return this.amount();
  });

  constructor(private todoService: TodoService) {
    console.log('inside constructor');
    // effect(() =>{
    //   console.log(this.amount());
    //   //onsole.log(this.total());
    // })
  }

  add() {}

  remove() {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addName() {
    this.names.push('kuda');
    this.index = this.index + 1;
    if (this.amount() === 10) {
      this.amount.set(1);
    } else {
      this.amount.set(this.index);
      this.value;
    }
  }

  sum(a: number, b: number) {
    return a + b;
  }
}
