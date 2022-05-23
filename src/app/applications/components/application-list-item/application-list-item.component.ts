import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IApplication } from '../../interfaces/application';

@Component({
  selector: 'app-application-list-item',
  templateUrl: './application-list-item.component.html',
  styleUrls: ['./application-list-item.component.css']
})
export class ApplicationListItemComponent implements OnInit {

  @Input() public application: IApplication;
  @Input() public isFavorite: boolean = false;
  @Output() public favoriteClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(event: Event) {
    this.favoriteClick.emit(event);
  }
}
