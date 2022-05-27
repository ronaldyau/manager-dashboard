import { Component, Input, OnInit } from '@angular/core';
import { IApplication } from '../../interfaces/application';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css'],
})
export class ApplicationDashboardComponent implements OnInit {
  @Input() applications: IApplication[] = [];
  public applicationsToDisplay: IApplication[];
  public positions: any = {};
  public dateRange: any = {};
  public experienceRange: any = {};
  public availabilities: any = {};
  private filteredPositions: string[];
  private filteredAppliedDate:
    | 'Any'
    | 'Past Month'
    | 'Past Week'
    | 'Past 24 hours' = 'Any';
  private filteredExperience:
    | '1 year'
    | '2 years'
    | '3 years'
    | '5 years'
    | '10 years';
  private filteredAvailability: string[];
  private oneDay = 24 * 60 * 60 * 1000;

  constructor() {}

  ngOnInit(): void {
    this.applicationsToDisplay = [...this.applications];
  }

  ngOnChanges(): void {
    this.applicationsToDisplay = [...this.applications];
    this.getFilters();
  }

  onPositionsFilterChanged(event: any) {
    this.filteredPositions = event.value;
    this.applyFilters();
  }

  onAppliedFilterChanged(event: any) {
    this.filteredAppliedDate = event.value;
    this.applyFilters();
  }

  onExperienceFilterChanged(event: any) {
    this.filteredExperience = event.value;
    this.applyFilters();
  }

  onAvailabilityFilterChanged(event: any) {
    this.filteredAvailability = event.value;
    this.applyFilters();
  }

  private getFilters() {
    this.applicationsToDisplay.forEach((application) => {
      this.processApplicationPositionForFilter(application);
      this.processApplicationAgeForFilter(application);
      this.processApplicationExperienceForFilter(application);
      this.processApplicationAvailabilityForFilter(application);
    });

    this.dateRange['Any'] = this.applications.length;
  }

  private processApplicationPositionForFilter(application: IApplication) {
    this.positions[application.position] = this.positions[application.position]
      ? this.positions[application.position] + 1
      : 1;
  }

  private processApplicationAgeForFilter(application: IApplication) {
    const dateLength = Math.ceil(
      (Date.now() - Date.parse(application.applied)) / this.oneDay
    );
    if (dateLength < 30) {
      this.dateRange['Past Month'] = this.dateRange['Past Month']
        ? this.dateRange['Past Month'] + 1
        : 1;
    }
    if (dateLength < 7) {
      this.dateRange['Past Week'] = this.dateRange['Past Week']
        ? this.dateRange['Past Week'] + 1
        : 1;
    }
    if (dateLength <= 1) {
      this.dateRange['Past 24 hours'] = this.dateRange['Past 24 hours']
        ? this.dateRange['Past 24 hours'] + 1
        : 1;
    }
  }

  private processApplicationExperienceForFilter(application: IApplication) {
    if (application.experience >= 1) {
      this.experienceRange['1 year'] = this.experienceRange['1 year']
        ? this.experienceRange['1 year'] + 1
        : 1;
    }
    if (application.experience >= 2) {
      this.experienceRange['2 years'] = this.experienceRange['2 years']
        ? this.experienceRange['2 years'] + 1
        : 1;
    }
    if (application.experience >= 3) {
      this.experienceRange['3 years'] = this.experienceRange['3 years']
        ? this.experienceRange['3 years'] + 1
        : 1;
    }
    if (application.experience >= 5) {
      this.experienceRange['5 years'] = this.experienceRange['5 years']
        ? this.experienceRange['5 years'] + 1
        : 1;
    }
    if (application.experience >= 10) {
      this.experienceRange['10 years'] = this.experienceRange['10 years']
        ? this.experienceRange['10 years'] + 1
        : 1;
    }
  }

  private processApplicationAvailabilityForFilter(application: IApplication) {
    if (application.availability.M) {
      this.availabilities.Monday = this.availabilities.Monday
        ? this.availabilities.Monday + 1
        : 1;
    }
    if (application.availability.T) {
      this.availabilities.Tuesday = this.availabilities.Tuesday
        ? this.availabilities.Tuesday + 1
        : 1;
    }
    if (application.availability.W) {
      this.availabilities.Wednesday = this.availabilities.Wednesday
        ? this.availabilities.Wednesday + 1
        : 1;
    }
    if (application.availability.Th) {
      this.availabilities.Thursday = this.availabilities.Thursday
        ? this.availabilities.Thursday + 1
        : 1;
    }
    if (application.availability.F) {
      this.availabilities.Friday = this.availabilities.Friday
        ? this.availabilities.Friday + 1
        : 1;
    }
    if (application.availability.S) {
      this.availabilities.Saturday = this.availabilities.Saturday
        ? this.availabilities.Saturday + 1
        : 1;
    }
    if (application.availability.Su) {
      this.availabilities.Sunday = this.availabilities.Sunday
        ? this.availabilities.Sunday + 1
        : 1;
    }
  }

  private applyFilters() {
    this.applicationsToDisplay = [...this.applications];

    this.applyPositionFilter();
    this.applyAppliedDateFilter();
    this.applyExperienceFilter();
    this.applyAvailabilityFilter();
  }

  private applyPositionFilter() {
    if (this.filteredPositions && this.filteredPositions.length) {
      this.applicationsToDisplay = [...this.applicationsToDisplay].filter(
        (application) => {
          return this.filteredPositions.includes(application.position);
        }
      );
    }
  }

  private applyAppliedDateFilter() {
    if (this.filteredAppliedDate !== 'Any') {
      const dateLength =
        this.filteredAppliedDate === 'Past Month'
          ? 30
          : this.filteredAppliedDate === 'Past Week'
          ? 7
          : 1;
      this.applicationsToDisplay = [...this.applicationsToDisplay].filter(
        (application) => {
          const applicationAge = Math.ceil(
            (Date.now() - Date.parse(application.applied)) / this.oneDay
          );
          return applicationAge <= dateLength;
        }
      );
    }
  }

  private applyExperienceFilter() {
    if (this.filteredExperience) {
      let minYears = 0;
      switch (this.filteredExperience) {
        case '1 year':
          minYears = 1;
          break;
        case '2 years':
          minYears = 2;
          break;
        case '3 years':
          minYears = 3;
          break;
        case '5 years':
          minYears = 5;
          break;
        case '10 years':
          minYears = 10;
          break;
      }

      this.applicationsToDisplay = [...this.applicationsToDisplay].filter(
        (application) => {
          return application.experience >= minYears;
        }
      );
    }
  }

  private applyAvailabilityFilter() {
    if (this.filteredAvailability && this.filteredAvailability.length) {
      const filteredAvailabilityKeys: string[] = [];

      this.filteredAvailability.forEach((availability) => {
        switch (availability) {
          case 'Monday':
            filteredAvailabilityKeys.push('M');
            break;
          case 'Tuesday':
            filteredAvailabilityKeys.push('T');
            break;
          case 'Wednesday':
            filteredAvailabilityKeys.push('W');
            break;
          case 'Thursday':
            filteredAvailabilityKeys.push('Th');
            break;
          case 'Friday':
            filteredAvailabilityKeys.push('F');
            break;
          case 'Saturday':
            filteredAvailabilityKeys.push('S');
            break;
          case 'Sunday':
            filteredAvailabilityKeys.push('Su');
            break;
        }
      });

      debugger;

      this.applicationsToDisplay = [...this.applicationsToDisplay].filter(
        (application) => {
          let hasAvailabilty = false;
          for (let i = 0; i < filteredAvailabilityKeys.length; i++) {
            if(application.availability.hasOwnProperty(filteredAvailabilityKeys[i])) {
              const availabilityHours = Object.getOwnPropertyDescriptor(application.availability, filteredAvailabilityKeys[i]);
              if (availabilityHours && availabilityHours.value) {
                hasAvailabilty = true;
                break;
              }
            }
          }
          return hasAvailabilty;
        }
      );
    }
  }
}
