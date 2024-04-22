import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './partial/sidebar/sidebar.component';
import { NavbarComponent } from './partial/navbar/navbar.component';
import { DashboardComponent } from "./dashboard/dashboard.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SidebarComponent, NavbarComponent, DashboardComponent]
})
export class AppComponent {
  title = 'angular-test-ocean-credit';
}
