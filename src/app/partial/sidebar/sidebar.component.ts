import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState } from '../../store/user/state';
import { User } from '../../store/user/user.interface';
import { selectLoggedUser } from '../../store/user/selectors';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loggedUser: User | null = null;

  constructor(private store: Store<{ auth: UserState }>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectLoggedUser)).subscribe(user => {
      console.log("user", user);
      this.loggedUser = user;
    });
  }
}
