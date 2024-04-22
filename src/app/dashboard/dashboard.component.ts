import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
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