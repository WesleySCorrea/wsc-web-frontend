import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarDetails } from '../../../model/car/car.model';
import { CarService } from '../../service/cars/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent implements OnInit {
  isEditable: boolean = false;
  originalCar!: CarDetails;
  car!: CarDetails;
  imageUrl!: string;

  constructor(private carService: CarService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.carService.findCarByID(id).subscribe(car => {
      this.car = car;
      this.defineType(car.type);
    })
  }

  toggleEdit() {
    if (!this.isEditable) {
      // Antes de permitir edição, salvamos uma cópia dos dados atuais
      this.originalCar = { ...this.car };
    } else {
      // Aqui você pode adicionar lógica para salvar as alterações
      console.log('Carro salvo:', this.car);
    }
    this.isEditable = !this.isEditable;
  }

  cancelEdit() {
    // Restaura os valores originais e desativa a edição
    this.car = { ...this.originalCar };
    this.isEditable = false;
  }

  saveCar() {

  }

  defineType(type: string) {
    const typeImages: Record<string, string> = {
      Car: 'https://img.icons8.com/?size=100&id=16553&format=png&color=000000',
      Bus: 'https://img.icons8.com/?size=100&id=4190&format=png&color=000000',
      Truck: 'https://img.icons8.com/?size=100&id=3562&format=png&color=000000',
    };

    this.imageUrl = typeImages[type] || 'https://img.icons8.com/?size=100&id=unknown&format=png&color=000000';
  }

}
