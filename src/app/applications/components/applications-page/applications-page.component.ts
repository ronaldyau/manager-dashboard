import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IApplication } from '../../interfaces/application';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.css'],
})
export class ApplicationsPageComponent implements OnInit {
  applications: IApplication[] = [];

  constructor(private service: ApplicationsService) {}

  ngOnInit(): void {
    this.service
      .getApplications()
      .pipe(take(1))
      .subscribe((applications: IApplication[]) => {
        this.applications = applications;
      });
  }
}
