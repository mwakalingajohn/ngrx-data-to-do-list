import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromState from './reducers';
import { TodosEffects } from './todos.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([TodosEffects]),
    StoreModule.forRoot(fromState.reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
