import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {    // in the interface called AppState
  salutation: string;      // define a simple message, a string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-fire';          
  message$: Observable<string>    // property convention:   dollar-sign for Observable 

                // ctor
  constructor(private store: Store<AppState>) {   // inject defined AppState into our store
    this.message$ = this.store.select('salutation')  // link store : message to our Observable $message
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})  // literal arg passed in
  }
  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'}) 
  }
}
