import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Setting ts property name to TASKS list, with type of TaskInterface[]
  //name: type = data/list
  ts:TaskInterface[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
