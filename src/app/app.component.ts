import { Component, signal } from '@angular/core';

import { type User } from './user/user.model';
import { USERS } from './users';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(USERS);
  selectedUser = signal<User | null>(null);

  setSelectedUser(user: User) {
    this.selectedUser.set(user);
  }
}
