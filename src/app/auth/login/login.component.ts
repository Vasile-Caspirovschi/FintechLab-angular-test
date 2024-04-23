import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../store/user/user.interface';
import { Store } from '@ngrx/store';
import { login } from '../../store/actions';
import { Router } from '@angular/router';
import { UserState } from '../../store/user/state';
import { CommonModule } from '@angular/common';

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
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private store: Store<{ auth: UserState }>, private router: Router) {
    this.user = {
      email: '',
      fullname: '',
      password: ''
    };

    this.loginForm = new FormGroup({
      email: new FormControl(''),
      fullname: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(value => {
      this.user = value;
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.user);
      
      this.store.dispatch(login({ user: this.user }));
      this.router.navigateByUrl('/dashboard');
    }
  }
}
