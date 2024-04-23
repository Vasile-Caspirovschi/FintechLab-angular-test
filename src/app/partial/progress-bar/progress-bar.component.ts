import { Component, Input, OnInit } from '@angular/core';
import { RandomNumbersService } from '../../_services/random-numbers.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit {
  @Input()
  title: string = 'Progress Bar';
  percent: string = '50%';
  @Input()
  color: string = 'blue';

  constructor(private randomNumbersService: RandomNumbersService) { }

  ngOnInit(): void {
    this.randomNumbersService.getRandomNumber(50, 95).subscribe((randomNumber: number) => {
      this.percent = `${randomNumber}%`;
    });
  }
}
