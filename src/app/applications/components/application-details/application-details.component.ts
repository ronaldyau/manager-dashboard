import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, Event } from '@angular/router';
import { filter, Subscription, take } from 'rxjs';
import { IApplication } from '../../interfaces/application';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css'],
})
export class ApplicationDetailsComponent implements OnInit, OnDestroy {
  public application: IApplication | null;
  private subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApplicationsService
  ) {}

  ngOnInit() {
    this.getApplication();
    this.subscription = this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
   ).subscribe(() => {
      this.getApplication();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private getApplication() {
    this.service
    .getApplications()
    .pipe(take(1))
    .subscribe((applications: IApplication[]) => {
      this.application =
        applications.find((application) => {
          return (
            application.id.toString() ===
            this.route.snapshot.paramMap.get('id')
          );
        }) || null;
    });
  }
}
