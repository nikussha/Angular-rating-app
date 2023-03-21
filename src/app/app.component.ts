import { ResponseService } from './response.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public serv: ResponseService) {}
  title = 'rating-app';
  bool: boolean = false;
  setbool() {
    setTimeout(() => {
      this.bool = true;
    }, 1000);
  }
}
