import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RandomNumbersService } from '../../_services/random-numbers.service';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input()
  path: string = '';
  @Input()
  color: string = '';
  @Input()
  title: string = '';
  number: string = '';

  constructor(private randomNumbersService: RandomNumbersService) { }

  ngOnInit(): void {
    this.randomNumbersService.getRandomNumber(30000, 50000).subscribe((randomNumber: number) => {
      this.number = randomNumber.toString();
    });
  }
}
