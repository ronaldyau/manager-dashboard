import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IApplication } from '../../interfaces/application';
import { IManager } from '../../interfaces/manager';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-bookmarks-page',
  templateUrl: './bookmarks-page.component.html',
  styleUrls: ['./bookmarks-page.component.css'],
})
export class BookmarksPageComponent implements OnInit {
  applications: IApplication[] = [];
  constructor(private service: ApplicationsService) {}

  ngOnInit(): void {
    this.service
      .getManager(1)
      .pipe(take(1))
      .subscribe((manager: IManager) => {
        this.service
          .getApplications(manager.bookmarkIds)
          .pipe(take(1))
          .subscribe((applications: IApplication[]) => {
            this.applications = applications;
          });
      });
  }
}
