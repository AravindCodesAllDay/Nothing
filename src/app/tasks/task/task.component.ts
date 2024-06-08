import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { TaskService } from '../tasks.service';

import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  task = input.required<Task>();
  private taskServices = inject(TaskService);

  setComplete() {
    this.taskServices.removeTask(this.task().id);
  }
}
