import { Component } from '@angular/core';
import { Observer } from 'rxjs';
import { headerIn } from './animations';
import { MockedServiceService } from './mocked-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [headerIn.headerIn],
})
export class AppComponent {
  title = 'task3';
  public query: string = '';
  public isLoading: boolean = false;
  public isLoad: boolean = false;
  public sendItems: string[] = [];
  private debounce: any;
  constructor(private mockedService: MockedServiceService) {}
  getCities() {
    if (this.debounce !== undefined) {
      clearTimeout(this.debounce);
      this.isLoading = false;
      this.isLoad = false;
    }
    if (this.query === '') {
      return;
    }
    this.debounce = setTimeout(() => {
      this.isLoading = true;
      const observer: Observer<string[]> = {
        next: (items) => {
          this.isLoading = false;
          this.isLoad = true;
          this.sendItems = items;
        },
        error: (err) => console.error('Observer got an error: ' + err),
        complete: () => (this.isLoading = false),
      };
      this.mockedService.getCitiesBack().subscribe(observer);
    }, 500);
  }
  showCity(city: string) {
    alert(`Your next destination is ${city}!`);
  }
}
