import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';
import { faTrash,faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() incomingTask!:TaskInterface;

  @Output() emitOnDeleteTasks : EventEmitter<TaskInterface> = new EventEmitter();

  @Output() emitOnToggleReminder: EventEmitter<TaskInterface> = new EventEmitter();

  faTrashIcon = faTrash;
  faTimesIcon = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(inco: TaskInterface){
    this.emitOnDeleteTasks.emit(inco);
  }

  onToggle(inco: TaskInterface){
    this.emitOnToggleReminder.emit(inco);
  }

}
