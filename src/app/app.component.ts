import { Component } from '@angular/core';
import { user } from './_interfaces/user.model';
import { HttpService } from './core/services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-learning-front';
}
