import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnterpriseInfo, SaveEnterprise } from '../../../model/enterprise/enterprise.model';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private host = environment.apiUrl;
  private token = 'seu-token-aqui';

  constructor(private http: HttpClient) { }


  loadEnterprises(): Observable<EnterpriseInfo[]> {

    const apiUrl = this.host + 'enterprise/list';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    return this.http.get<EnterpriseInfo[]>(apiUrl, { headers });
  }

  saveEnterprise(enterprise: SaveEnterprise): Observable<EnterpriseInfo> {

    const apiUrl = this.host + 'enterprise'
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    return this.http.post<EnterpriseInfo>(apiUrl, enterprise, { headers });
  }
}
