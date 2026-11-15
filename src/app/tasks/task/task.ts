import { Component, input, inject } from '@angular/core';
import { TaskType } from '../task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  imports: [Card, DatePipe],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  task = input.required<TaskType>();

  private tasksService = inject(TasksService);
  
  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}
