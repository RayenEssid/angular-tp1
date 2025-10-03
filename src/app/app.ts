import { Component, signal } from '@angular/core';
//import { Home } from "./home/home";
import { Todo } from "./todo/todo";
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [ Todo],
  templateUrl: './app.html',
  //template : '<h1>App Commponent</h1>', //inline template
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
