import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../store/user/user.interface';
import { Store } from '@ngrx/store';
import { login, logout } from '../../store/actions';
import { Router } from '@angular/router';
import { UserState } from '../../store/user/state';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User;

  constructor(private store: Store<{ auth: UserState }>, private router: Router) {
    this.user = {
      email: '',
      fullname: '',
      password: ''
    };
  }

  login() {
    this.store.dispatch(login({ user: this.user }));
    this.router.navigateByUrl('/dashboard');
  }
}
