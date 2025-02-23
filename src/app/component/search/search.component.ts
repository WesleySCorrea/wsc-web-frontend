import { Component } from '@angular/core';
import { Car } from '../../../model/car/car.model';
import { CarService } from '../../service/cars/car.service';
import { FormsModule } from '@angular/forms';
import { Page } from '../../../model/page.model';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  id: number = 0
  plate: string = '';
  enterprise: string = '';
  type: string = '';
  vencimento: string = '';
  page: number = 0;
  size: number = 5;

  cars!: Page<Car>;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    console.log("antes do NgInit");
    console.log(this.cars)
    this.findByCars();
    console.log("depois do NgInit");
    console.log(this.cars)
  }

  findByCars() {
    const filters = {
      plate: this.plate || undefined,
      enterprise: this.enterprise || undefined,
      type: this.type || undefined,
      vencimento: this.vencimento || undefined,
      page: this.page.toString() || undefined,
      size: this.size.toString() || undefined,
    };

    this.carService.findByCars(filters).subscribe((result) => {
      this.cars = result;
      console.log(this.cars);
    });
  }
}
