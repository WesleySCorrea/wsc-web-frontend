import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from "../component/navbar/navbar.component";
import { SearchComponent } from "../component/search/search.component";
import { CarDetailsComponent } from "./car-details/car-details.component";
import { CarTableComponent } from "../component/car-table/car-table.component";
import { Page } from '../../model/page.model';
import { Car } from '../../model/car/car.model';

@Component({
  selector: 'app-cars',
  imports: [SearchComponent, CarTableComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {

  @ViewChild(SearchComponent) searchComponent!: SearchComponent;
  cars: Page<Car> = {} as Page<Car>;

  onFindByCars(cars: Page<Car>) {
    console.log("Dados recebidos do SearchComponent no CARS COMPONENT", cars);
    this.cars = cars;
  }

  onFindByCarsPage(page: number, size: number) {
    console.log("Mudança de página detectada no CarTableComponent:", page);
    this.searchComponent.findByCarsPage(page, size);
  }
}
