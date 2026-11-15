import { Component, input, } from '@angular/core';
import { Task } from './task/task';
import { Addtask } from './task/addtask/addtask';
import { TasksService } from './tasks.service';

@Component({
  imports: [Task, Addtask],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  userId = input.required<string>();
  name = input.required<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onAddTask() {
    this.isAddingTask = true;
  }
  onCloseTask() {
    this.isAddingTask = false;
  }
}



