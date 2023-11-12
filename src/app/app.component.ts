import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from '../core/services/api.service';
import { ApiResponse } from '../core/models/weather-response.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentTemperature!: number;
  weeklyForecast: any[] = [];
  city: string = 'cairo';
  data!: ApiResponse;

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
    this.weatherService
      .getWeatherForecast(city)
      .subscribe((data: ApiResponse) => {
        this.data = data;
        this.currentTemperature = data.current.temp_c;
        this.weeklyForecast = data.forecast.forecastday;
      });
  }
}
