import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/weather-response.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'c85bbf1f02d8472a98f122950230911';
  private apiUrl = 'https://api.weatherapi.com/v1/forecast.json';

  constructor(private http: HttpClient) {}

  getWeatherForecast(city: string): Observable<ApiResponse> {
    const params = new HttpParams()
      .set('q', city)
      .set('key', this.apiKey)
      .set('days', 7)
      .set('aqi', 'no')
      .set('alerts', 'no');

    return this.http.get<ApiResponse>(this.apiUrl, { params });
  }
}
