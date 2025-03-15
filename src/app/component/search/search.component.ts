import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../../../model/car/car.model';
import { CarService } from '../../service/cars/car.service';
import { FormsModule } from '@angular/forms';
import { Page } from '../../../model/page.model';
import { EnterpriseInfo } from '../../../model/enterprise/enterprise.model';
import { EnterpriseService } from '../../service/enterprises/enterprise.service';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule, MatDatepickerModule, MatFormFieldModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  id: number = 0
  plate: string = '';
  enterpriseName: string = '';
  type: string = '';
  endDate: string = '';
  page: number = 0;
  size: number = 5;

  cars!: Page<Car>;
  enterprises!: EnterpriseInfo[];
  typeList!: string[];

  @Output() carSearch = new EventEmitter<Page<Car>>();

  constructor(private carService: CarService, private enterpriseService: EnterpriseService) { }

  ngOnInit(): void {
    this.findByCars();
    this.loadEnterprises();
    this.loadTypes();
  }

  searchCars(): void {
    this.page = 0,
      this.size = 5
    this.findByCars();
  }

  findByCars(): void {

    const filters = {
      plate: this.plate || undefined,
      enterprise: this.enterpriseName || undefined,
      type: this.type || undefined,
      endDate: this.endDate || undefined,
      page: this.page.toString() || undefined,
      size: this.size.toString() || undefined,
    };

    this.carService.findByCars(filters).subscribe((result) => {
      this.cars = result;
      this.carSearch.emit(result);
    });
  }

  findByCarsPage(page: number, size: number): void {
    this.page = page;
    this.size = size;
    this.findByCars();
  }

  loadEnterprises(): void {
    this.enterpriseService.loadEnterprises().subscribe((result) => {
      this.enterprises = result
    })
  }

  loadTypes(): void {
    const filters = {
      enterprise: this.enterpriseName || undefined,
      endDate: this.endDate || undefined,
    };

    this.carService.loadTypes(filters).subscribe((result) => {
      this.typeList = result;
    });
  }

  set enterprise(value: string) {
    this.enterpriseName = value;
    this.loadTypes();
  }

  set vencimento(value: string) {
    console.log("entrou em set do vencimento", value)
    this.endDate = value;
    console.log("Setou a data", this.endDate)
    this.loadTypes();
  }
}
