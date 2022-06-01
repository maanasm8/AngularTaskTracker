import { Injectable } from '@angular/core';
import { TaskInterface } from '../TaskInterface';
import { TASKS } from '../mock-tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  ts:TaskInterface[] = TASKS;

  //Add tasks
  addTasks(t: TaskInterface){
    this.ts.push(t);
  }

  //getter tasks
  getTasks(){
    return this.ts;
  }
  constructor() { }
}
