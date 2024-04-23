import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RandomUser } from '../../_models/random-user';
import { RandomUserService } from '../../_services/random-user.service';
import { NativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NativeDateModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent implements OnInit {
  user: RandomUser;

  constructor(private randomUser: RandomUserService) {
    this.user = {
      fullname: '',
      image: '',
      date: new Date()
    };
  }

  ngOnInit(): void {
    this.randomUser.getRandomUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
}
