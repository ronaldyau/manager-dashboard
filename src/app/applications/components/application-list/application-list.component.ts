import { Component, Input, OnInit } from '@angular/core';
import { IApplication } from '../../interfaces/application';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {
  @Input() applications: IApplication[] = [];
  public applicationsToDisplay: IApplication[];
  private sortOrder:
    | 'none'
    | 'name'
    | 'position'
    | 'applied'
    | 'experience'
    | 'availability';
  private sortBy: 'ascending' | 'descending';

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.applicationsToDisplay = [...this.applications];
  }

  onNameClick() {
    if (this.sortOrder !== 'name') {
      this.sortOrder = 'name';
      this.sortBy = 'ascending';
    } else {
      this.sortBy = this.sortBy === 'ascending' ? 'descending' : 'ascending';
    }

    this.applicationsToDisplay = this.applicationsToDisplay.sort((a, b) => {
      if (this.sortBy === 'ascending') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  onPositionClick() {
    if (this.sortOrder !== 'position') {
      this.sortOrder = 'position';
      this.sortBy = 'ascending';
    } else {
      this.sortBy = this.sortBy === 'ascending' ? 'descending' : 'ascending';
    }

    this.applicationsToDisplay = this.applicationsToDisplay.sort((a, b) => {
      if (this.sortBy === 'ascending') {
        return a.position.localeCompare(b.position);
      } else {
        return b.position.localeCompare(a.position);
      }
    });
  }

  onAppliedClick() {
    if (this.sortOrder !== 'applied') {
      this.sortOrder = 'applied';
      this.sortBy = 'ascending';
    } else {
      this.sortBy = this.sortBy === 'ascending' ? 'descending' : 'ascending';
    }

    this.applicationsToDisplay = this.applicationsToDisplay.sort((a, b) => {
      if (this.sortBy === 'ascending') {
        return Date.parse(a.applied) - Date.parse(b.applied);
      } else {
        return Date.parse(b.applied) - Date.parse(a.applied);
      }
    });
  }

  onExperienceClick() {
    if (this.sortOrder !== 'experience') {
      this.sortOrder = 'experience';
      this.sortBy = 'ascending';
    } else {
      this.sortBy = this.sortBy === 'ascending' ? 'descending' : 'ascending';
    }

    this.applicationsToDisplay = this.applicationsToDisplay.sort((a, b) => {
      if (this.sortBy === 'ascending') {
        return a.experience - b.experience;
      } else {
        return b.experience - a.experience;
      }
    });
  }

  onAvailabilityClick() {
    if (this.sortOrder !== 'availability') {
      this.sortOrder = 'availability';
      this.sortBy = 'ascending';
    } else {
      this.sortBy = this.sortBy === 'ascending' ? 'descending' : 'ascending';
    }

    this.applicationsToDisplay = this.applicationsToDisplay.sort((a, b) => {
      const totalHoursA =
        a.availability.M +
        a.availability.T +
        a.availability.W +
        a.availability.Th +
        a.availability.F +
        a.availability.S +
        a.availability.Su;
      const totalHoursB =
        b.availability.M +
        b.availability.T +
        b.availability.W +
        b.availability.Th +
        b.availability.F +
        b.availability.S +
        b.availability.Su;
      if (this.sortBy === 'ascending') {
        return totalHoursA - totalHoursB;
      } else {
        return totalHoursB - totalHoursA;
      }
    });
  }

  // TODO
  handleFavoriteClick(event: any) {
    console.log(event);
  }

  private applySort() {}
}
