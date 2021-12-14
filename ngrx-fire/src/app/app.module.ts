import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { salutationReducer } from './salutationReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ salutation: salutationReducer })  // store one, or more,  In general, you register root states that always need to be available to all areas of your application immediately
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
