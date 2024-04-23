import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-viewschart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './viewschart.component.html',
  styleUrl: './viewschart.component.css'
})
export class ViewschartComponent implements OnInit{
  chart: any = [];

  ngOnInit(): void {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr'];
    const data = [2.5, 1.4, 6, 4];
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels,
        datasets: [{
          data,
          fill: {
            target: 'origin',
            above: '#becfff',
          },
          backgroundColor: '#2962ff',
          borderColor: '#2962ff',
          borderWidth: 3,
          tension: 0.4
        }]
      },

      options: {
        plugins: {
          legend: {
            display: false,

          }
        },
        scales: {
          y: {
            suggestedMax: 10,
            display: false,
          },
        }
      }
    });
  }

}
