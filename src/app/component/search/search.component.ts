import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../../../model/car/car.model';
import { CarService } from '../../service/cars/car.service';
import { FormsModule } from '@angular/forms';
import { Page } from '../../../model/page.model';
import { CarTableComponent } from "../car-table/car-table.component";

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

  @Output() carSearch = new EventEmitter<Page<Car>>();

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    console.log("Componente de pesquisa carregado, realizando busca inicial...", this.cars);
    this.findByCars();
    console.log("Fim do ngOnInit - SEARCH COOMPONET", this.cars);
  }

  findByCars(): void {
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
      console.log("Na chamada findByCars - SearchComponet", this.cars);
      this.carSearch.emit(result);
    });
  }

  findByCarsPage(page: number, size: number): void {
    this.page = page;
    this.size = size;
    console.log("Página atualizada para:", this.page, this.size);
    this.findByCars();
  }
}
