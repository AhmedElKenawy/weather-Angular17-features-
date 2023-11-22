import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from '../core/services/api.service';
import { ApiResponse, Forecast, Forecastday } from '../core/models/weather-response.model';
import { FormsModule } from '@angular/forms';
import { CurrentTempViewComponent } from './components/current-temp-view/current-temp-view.component';
import { DailyTempViewComponent } from './components/daily-temp-view/daily-temp-view.component';
import { Observable, finalize, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    FormsModule,
    CurrentTempViewComponent,
    DailyTempViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentTemperature!: number;
  weeklyForecast: any[] = [];
  city: string = 'cairo';
  data!: ApiResponse;
  isLoading = false;
  weatherForecastData$!: Observable<ApiResponse>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  searchWeather(): void {
    if (this.city.trim() !== '') {
      this.getWeatherData(this.city);
    }
  }

  getWeatherData(city: string): void {
    this.isLoading = true;
    this.weatherForecastData$ = this.weatherService
      .getWeatherForecast(city)
      .pipe(finalize(() => this.isLoading = false) );
  }
  

}
