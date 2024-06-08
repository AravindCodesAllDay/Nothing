import { Component, signal, output, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type User } from '../../user/user.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  user = input.required<User>();
  closeAddTask = output<void>();

  titleValue = signal<string>('');
  summaryData = signal<string>('');
  dueDateValue = signal<string>('');

  private taskService = inject(TaskService);

  onCancel() {
    this.closeAddTask.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.titleValue(),
        summary: this.summaryData(),
        dueDate: this.dueDateValue(),
      },
      this.user().id
    );
    this.closeAddTask.emit();
  }
}
