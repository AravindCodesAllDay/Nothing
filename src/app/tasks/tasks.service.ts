import { Injectable, signal } from '@angular/core';

import { type Task, type NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = signal<Task[]>([]);

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  viewTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    const newTask = signal<Task>({
      id: new Date().getTime().toString(),
      userId: userId,
      ...taskData,
    });
    this.tasks.set(this.tasks().concat(newTask()));
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
