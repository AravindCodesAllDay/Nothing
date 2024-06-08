import { Component, computed, inject, input, signal } from '@angular/core';

import { type User } from '../user/user.model';
import { TaskService } from './tasks.service';

import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  isAddingTask = signal<boolean>(false);

  private taskServices = inject(TaskService);

  userTasks = computed(() => {
    return this.taskServices.viewTasks(this.user().id);
  });

  toggleAddTask() {
    this.isAddingTask.set(!this.isAddingTask());
  }
}
