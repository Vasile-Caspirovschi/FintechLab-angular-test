import { Component } from '@angular/core';
import { SidebarComponent } from '../../src/app/partial/sidebar/sidebar.component';
import { NavbarComponent } from '../../src/app/partial/navbar/navbar.component';
import { DashboardComponent } from '../../src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, DashboardComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
