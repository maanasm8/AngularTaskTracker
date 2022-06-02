import { Injectable } from '@angular/core';
import { TaskInterface } from '../TaskInterface';
// import { TASKS } from '../mock-tasks';
//While working with async data when fetching from server we should use Observables
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  

  ts:TaskInterface[] = [];

  private apiURL = 'http://localhost:5000/tasks';

  //Add tasks
  addTasks(t: TaskInterface){
    this.ts.push(t);
  }

  //getter tasks
  getTasks(): Observable<TaskInterface[]>{
    // const tsk = of(this.ts);
    // return tsk;
    return this.httpVar.get<TaskInterface[]>(this.apiURL);
  }

  //this deleteTask deletes from the json-server
  //Will be called deleteTask from tasks.component.ts 
  deleteTask(t: TaskInterface): Observable<TaskInterface>{
    const url =  `${this.apiURL}/${t.id}`;
    return this.httpVar.delete<TaskInterface>(url);
  }

  updateTaskToggleInJson(tas:TaskInterface):Observable<TaskInterface>{

    const url2 = `${this.apiURL}/${tas.id}`;
    return this.httpVar.put<TaskInterface>(url2, tas, httpOptions);

  }


  constructor(private httpVar:HttpClient) { }
}
