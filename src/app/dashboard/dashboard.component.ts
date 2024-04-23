import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { Store, select } from '@ngrx/store';
import { UserState } from '../store/user/state';
import { User } from '../store/user/user.interface';
import { selectLoggedUser } from '../store/user/selectors';
import { ViewschartComponent } from '../partial/viewschart/viewschart.component';
import { MeetingComponent } from '../partial/meeting/meeting.component';
import { ProgressBarComponent } from '../partial/progress-bar/progress-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    ViewschartComponent,
    MeetingComponent,
    ProgressBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  loggedUser: User | null = null;


  constructor(private store: Store<{ auth: UserState }>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectLoggedUser)).subscribe(user => {
      this.loggedUser = user;
    });
  }
}
