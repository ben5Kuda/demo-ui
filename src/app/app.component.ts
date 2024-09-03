import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hexham';
  companyName = 'Hexham Express'; 
  amount = signal(10);
  value = signal(5);
  names = ['jones', 'henry'];
  index = 0;
 
  total = computed( () => {
    return this.amount();
  });

  constructor(){
    console.log('inside constructor');
    effect(() =>{
      console.log(this.amount());
      //onsole.log(this.total());
    })
  }

  addName(){
    this.names.push('kuda');
    this.index = this.index + 1;
    if (this.amount() === 10) {
      this.amount.set(1);
    }
    else {
      this.amount.set(this.index);
      this.value;
    }    
  }

  sum(a: number, b: number) {
    return a + b;
}
}
