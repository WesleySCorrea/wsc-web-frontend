import { Component } from '@angular/core';
import { NavbarComponent } from "../component/navbar/navbar.component";
import { SearchComponent } from "../component/search/search.component";

@Component({
  selector: 'app-cars',
  imports: [SearchComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {

}
