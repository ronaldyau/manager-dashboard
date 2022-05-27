import { Component } from '@angular/core';
import { ApplicationsService } from './applications/services/applications.service';
import { take } from 'rxjs/operators';
import { IApplication } from './applications/interfaces/application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Manager Dashboard';
  applications: IApplication[] = [];

  constructor(private service: ApplicationsService) {}

  ngOnInit() {
    this.service.getApplications().pipe(take(1)).subscribe((applications:IApplication[]) => {
      this.applications = applications;
    })
  }
}
