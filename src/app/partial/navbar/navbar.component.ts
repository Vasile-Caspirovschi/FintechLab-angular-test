import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user/state';
import { logout } from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor(private store: Store<{ auth: UserState }>, private router: Router) { }

  logout() {
    this.store.dispatch(logout());
    this.router.navigateByUrl('/');
  }
}
