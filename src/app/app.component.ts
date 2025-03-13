import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TourNgxBootstrapModule, TourService} from 'ngx-ui-tour-ngx-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TourNgxBootstrapModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guide-tour-with-popper';
  constructor(public tourService: TourService) {
    this.tourService.initialize([
      {
        anchorId: 'angular-ui-tour',
        content:
          'Thanks to angular-ui-tour for the inspiration for the library',
        placement: 'bottom',
        title: 'angular-ui-tour'
      },
      {
        anchorId: 'home-page',
        content: 'This is home page',
        placement: 'bottom',
        title: 'angular-ui-tour'
      }
    ])
    this.tourService.start();
  }


}
