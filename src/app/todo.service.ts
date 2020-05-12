import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  rootUrl: string = "http://localhost:3000/todos"
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>( `${this.rootUrl}`, this.httpOptions)
  }

  deleteTodo(id:string){
    let url = `${this.rootUrl}/${id}`
    console.log(url);

    return this.http.delete(url,this.httpOptions)
  }

  addTodo( todo: Todo){
    return this.http.post(`${this.rootUrl}`, todo, this.httpOptions)
  }
}
