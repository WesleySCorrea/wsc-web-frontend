import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../../../model/car/car.model';
import { CarService } from '../../service/cars/car.service';
import { FormsModule } from '@angular/forms';
import { Page } from '../../../model/page.model';
import { EnterpriseInfo } from '../../../model/enterprise/enterprise.model';
import { EnterpriseService } from '../../service/enterprises/enterprise.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  id: number = 0
  plate: string = '';
  enterpriseName: string = '';
  type: string = '';
  vencimento: string = '';
  page: number = 0;
  size: number = 5;

  cars!: Page<Car>;
  enterprises: EnterpriseInfo[] = [];

  @Output() carSearch = new EventEmitter<Page<Car>>();

  constructor(private carService: CarService, private enterpriseService: EnterpriseService) { }

  ngOnInit(): void {
    console.log("Componente de pesquisa carregado, realizando busca inicial...", this.cars);
    this.findByCars();
    console.log("Carregado lista de cars - OnInit", this.cars);

    console.log("Carregando lista de empresas, realizando busca inicial...", this.enterprises);
    this.loadEnterprises();
    console.log("Fim do ngOnInit - SEARCH COOMPONET - Lista de Empresas Completa?", this.enterprises);
  }

  findByCars(): void {
    const filters = {
      plate: this.plate || undefined,
      enterprise: this.enterpriseName || undefined,
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

  loadEnterprises() {
    this.enterpriseService.loadEnterprises().subscribe((result) => {
      this.enterprises = result
      console.log("Na chamada loadEnterprises - SearchComponet", this.enterprises);
    })
  }
}
