/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import { Store } from '@ngrx/store';
import { Devtools } from '@ngrx/devtools';

export function reducer(count = 0, action) {
  console.log('received new count', count)
  switch(action.type) {
    case 'ADD':
      return count + 1;
    case 'SUBTRACT':
      return count - 1;
    default:
      return count;
  }
}

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ Devtools ],
  styles: [`
    :host {

    }
  `],
  template: `

    <span style="color:green;">Count {{ count$ | async }}</span>

    <button (click)="add()">Add</button>
    <button (click)="subtract()">Subtract</button>

    <ngrx-devtools></ngrx-devtools>
  `
})
export class App {
  constructor(private store: Store<{ count: number }>) { }

  count$ = this.store.select(s => s.count);

  add() {
    this.store.dispatch({ type: 'ADD' });
  }

  subtract() {
    this.store.dispatch({ type: 'SUBTRACT' });
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
