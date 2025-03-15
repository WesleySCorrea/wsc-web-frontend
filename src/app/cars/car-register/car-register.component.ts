import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnterpriseInfo } from '../../../model/enterprise/enterprise.model';
import { CarService } from '../../service/cars/car.service';
import { SaveCar } from '../../../model/car/car.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './car-register.component.html',
  styleUrl: './car-register.component.scss'
})
export class CarRegisterComponent {
  plate: string = '';
  chassis: any = '';
  ano: number | null = null;
  enterprises!: EnterpriseInfo[];
  typeList!: string[];

  constructor(private carService: CarService, private router: Router) { }


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
      enterpriseId: 1,
      type: "Car",
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

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Converte para "YYYY-MM-DD"
  }
}
