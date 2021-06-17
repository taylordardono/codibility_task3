import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {
  @Output('selectedCity') selectedCity: EventEmitter<string> =
    new EventEmitter<string>();
  @Input('loadedCities') cities: string[] = [];
  public items: string[] = [];
  constructor() {}

  emitAlert(city: string) {
    this.selectedCity.emit(city);
  }

  ngOnInit(): void {}
  ngOnChanges(changes?: SimpleChanges) {
    if (changes) {
      this.items = changes['cities'].currentValue;
    }
  }
}
