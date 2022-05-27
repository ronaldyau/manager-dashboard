import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  Event,
  NavigationEnd,
} from '@angular/router';
import { filter, Subscription, take } from 'rxjs';
import { IApplication } from '../../interfaces/application';
import { IManager } from '../../interfaces/manager';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css'],
})
export class ApplicationDetailsComponent implements OnInit, OnDestroy {
  @Output() public favoriteClicked = new EventEmitter();

  public application: IApplication;
  public manager: IManager;

  get isBookmarked(): boolean {
    if (this.manager && this.application) {
      return this.manager.bookmarkIds.includes(this.application.id);
    }
    return false;
  }

  private subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApplicationsService
  ) {}

  ngOnInit() {
    this.getApplication();
    this.getManager();
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.route) {
        this.getApplication();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onBookmarkClicked(): void {
    if (this.manager.bookmarkIds.includes(this.application.id)) {
      this.manager.bookmarkIds.splice(
        this.manager.bookmarkIds.indexOf(this.application.id),
        1
      );
    } else {
      this.manager.bookmarkIds.push(this.application.id);
    }
    this.service
      .updateManager(this.manager)
      .pipe(take(1))
      .subscribe((manager: IManager) => {
        this.manager = manager;
      });
  }

  private getApplication() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service
        .getApplication(parseInt(id))
        .pipe(take(1))
        .subscribe((application: IApplication) => {
          this.application = application || null;
        });
    }
  }

  private getManager() {
    this.service
      .getManager(1)
      .pipe(take(1))
      .subscribe((manager: IManager) => {
        this.manager = manager;
      });
  }
}
