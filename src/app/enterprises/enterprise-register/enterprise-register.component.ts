import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enterprise-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './enterprise-register.component.html',
  styleUrl: './enterprise-register.component.scss'
})
export class EnterpriseRegisterComponent {
  name: string = "";
  cnpj: string = "";


  constructor() { }

}
