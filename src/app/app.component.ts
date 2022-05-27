import { Component } from '@angular/core';
import { ApplicationsService } from './applications/services/applications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Manager Dashboard';

  constructor(private service: ApplicationsService) {}

  ngOnInit() {}
}
