import { Component  , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forecastday } from '../../../core/models/weather-response.model';

@Component({
  selector: 'app-daily-temp-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-temp-view.component.html',
  styleUrl: './daily-temp-view.component.scss'
})
export class DailyTempViewComponent {
  @Input() dailyForecast ! : Forecastday 

}
