import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnterpriseService } from '../../service/enterprises/enterprise.service';
import { SaveEnterprise } from '../../../model/enterprise/enterprise.model';

@Component({
  selector: 'app-enterprise-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './enterprise-register.component.html',
  styleUrl: './enterprise-register.component.scss'
})
export class EnterpriseRegisterComponent {
  name: string = "";
  cnpj: string = "";


  constructor(private enterpriseService: EnterpriseService) { }

  saveEnterprise(): void {
    const enterprise: SaveEnterprise = {
      name: this.name,
      cnpj: this.cnpj,
    };

    console.log(enterprise);

    this.enterpriseService.saveEnterprise(enterprise).subscribe(
      (result) => {
        console.log(result);
        console.log('Empresa salvo com sucesso:', result);
      },
      (error) => {
        console.error('Erro ao salvar a enoresa:', error);
      })
  }

}
