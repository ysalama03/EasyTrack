import { Component, output, signal, inject, input } from '@angular/core';
import { NewTaskDataType } from '../../task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../tasks.service';

@Component({
  imports: [FormsModule],
  selector: 'app-addtask',
  styleUrl: './addtask.css',
  templateUrl: './addtask.html',
})
export class Addtask {
  userId = input.required<string>(); // Replace 'u1' with the actual user ID
  close = output<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);
  onAddTask() {
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    }, this.userId());
    this.close.emit();
  }
  onClose() {
    this.close.emit();
  }
}
