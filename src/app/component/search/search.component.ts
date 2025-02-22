import { Component } from '@angular/core';
import { Car } from '../../../model/car/car.model';
import { CarService } from '../../service/cars/car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  placa: string = '';
  empresa: string = '';
  tipo: string = '';
  vencimento: string = '';

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  findByCars() {
    const filters = {
      placa: this.placa || undefined,
      empresa: this.empresa || undefined,
      tipo: this.tipo || undefined,
      vencimento: this.vencimento || undefined
    };

    this.carService.findByCars(filters).subscribe((result) => {
      this.cars = result;
      console.log(this.cars);
    });
  }
}
