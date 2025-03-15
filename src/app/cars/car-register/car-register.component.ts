import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnterpriseInfo } from '../../../model/enterprise/enterprise.model';
import { CarService } from '../../service/cars/car.service';
import { SaveCar } from '../../../model/car/car.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EnterpriseService } from '../../service/enterprises/enterprise.service';

@Component({
  selector: 'app-car-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './car-register.component.html',
  styleUrl: './car-register.component.scss'
})
export class CarRegisterComponent implements OnInit {
  plate: string = '';
  chassis: any = '';
  ano: number | null = null;
  type: string = '';
  enterpriseName!: string;
  enterprises!: EnterpriseInfo[];
  typeList!: string[];

  constructor(private carService: CarService, private enterpriseService: EnterpriseService, private router: Router) { }

  ngOnInit(): void {
    this.loadCarTypes();
    this.loadEnterprises();
  }

  validateAno(event: any) {
    const inputValue = event.target.value;

    if (inputValue.length > 1) {
      event.target.value = inputValue.slice(0, 3);
    }
  }

  saveCar(): void {
    const car: SaveCar = {
      plate: this.plate,
      year: this.ano!,
      chassis: this.chassis,
      enterpriseId: this.getEnterpriseById(this.enterpriseName),
      type: this.type,
      maturity: this.formatDate(new Date())
    };

    console.log(car);

    this.carService.saveCar(car).subscribe(
      (result) => {
        console.log(result);
        console.log('Carro salvo com sucesso:', result);
        alert("Veiculo Criado com Sucesso.");
        this.router.navigate(['/cars', result.id]);
      },
      (error) => {
        alert("Erro ao cadastrar o Veículo.");
        console.error('Erro ao salvar o carro:', error);
      })
  }

  loadCarTypes(): void {
    this.carService.loadTypes({}).subscribe({
      next: (types) => {
        this.typeList = types;
        console.log(this.typeList);
      },
      error: () => {
        alert("Erro ao carregar os tipos de veiculos.");
      }
    })
  }

  loadEnterprises(): void {
    this.enterpriseService.loadEnterprises().subscribe({
      next: (enterprises) => {
        this.enterprises = enterprises;
        console.log(this.enterprises);
      },
      error: () => {
        alert("Erro ao carregar a lista de empresas.");
      }
    })
  }

  getEnterpriseById(name: string): number {
    console.log(name)

    const enterprise = this.enterprises.find(enterprise => enterprise.name === name);
    if (!enterprise) {
      throw new Error(`Empresa com nome "${name}" não encontrada.`);
    }
    return enterprise.id;
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Converte para "YYYY-MM-DD"
  }
}
