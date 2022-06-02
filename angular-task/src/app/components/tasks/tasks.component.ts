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
    //subscribe is like a promise
    this.ts.getTasks().subscribe((t)=> (this.tsVar = t));
  }

  //Calls deleteTask from task.service.ts which deletes from the json-server
  //and this also deletes from the UI
  deleteTask(t: TaskInterface){
    this.ts.deleteTask(t).subscribe(()=> (
      this.tsVar = this.tsVar.filter(t2 => t2.id !== t.id)
    ));
  }

  //Toggles the reminder on double click, on = red bar
  //Maintains the state of toggle reminders even on reload
  toggleTask(t: TaskInterface){
    t.reminder = !t.reminder;
    this.ts.updateTaskToggleInJson(t).subscribe();

  }

}
