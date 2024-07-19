import { Component, ViewChild } from '@angular/core';
import { HeaderComponent} from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { FirstChartComponent } from './first-chart/first-chart.component';
import { SecondChartComponent } from './second-chart/second-chart.component';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,WelcomeComponent,FirstChartComponent,SecondChartComponent, DashboardCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title : string = "  "
}
