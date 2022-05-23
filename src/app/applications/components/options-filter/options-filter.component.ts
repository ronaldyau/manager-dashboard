import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options-filter',
  templateUrl: './options-filter.component.html',
  styleUrls: ['./options-filter.component.css']
})
export class OptionsFilterComponent implements OnInit { 
  @Input() label: string;
  @Input() options: any;
  @Input() isMultiple: boolean = false;
  @Output() onOptionsChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChanged(event: any) {
    this.onOptionsChanged.emit(event);
  }
}
