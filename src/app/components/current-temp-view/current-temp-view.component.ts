import { Component  , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiResponse } from '../../../core/models/weather-response.model';

@Component({
  selector: 'app-current-temp-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-temp-view.component.html',
  styleUrl: './current-temp-view.component.scss'
})
export class CurrentTempViewComponent {
  @Input() cityForecast!  : ApiResponse ; 
}
