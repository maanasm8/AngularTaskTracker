import { Component, OnInit } from '@angular/core';
// import { TaskInterface } from 'src/app/TaskInterface';
// import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { TaskInterface } from 'src/app/TaskInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Setting ts property name to TASKS list, with type of TaskInterface[]
  //name: type = data/list
  //ts:TaskInterface[] = TASKS;
  tsVar: TaskInterface[] = [];

  //Getting tasks from TaskService using Dependency Injecting constructor
  constructor(private ts:TaskService) { }
  
  

  ngOnInit(): void {
    this.tsVar = this.ts.getTasks();
  }

}
