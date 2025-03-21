import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car, CarDetails, SaveCar, UpdateCar } from '../../../model/car/car.model';
import { Page } from '../../../model/page.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private host = environment.apiUrl;
  private token = 'seu-token-aqui';

  constructor(private http: HttpClient) { }

  findByCars(filters: { [key: string]: string | undefined }): Observable<Page<Car>> {

    const apiUrl = this.host + 'cars';
    let params = new HttpParams();

    for (const key in filters) {
      if (filters[key]) {
        params = params.append(key, filters[key] as string);
      }
    }

    return this.http.get<Page<Car>>(apiUrl, { params });
  }

  findCarByID(id: number): Observable<CarDetails> {

    const apiUrl = this.host + 'cars/' + id;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    return this.http.get<CarDetails>(apiUrl, { headers });
  }

  loadTypes(filters: { [key: string]: string | undefined }): Observable<string[]> {

    const apiUrl = this.host + 'cars/types';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    let params = new HttpParams();

    for (const key in filters) {
      if (filters[key]) {
        params = params.append(key, filters[key] as string);
      }
    }

    return this.http.get<string[]>(apiUrl, { headers, params });
  }

  saveCar(car: SaveCar): Observable<Car> {
    const apiUrl = this.host + 'cars';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    return this.http.post<Car>(apiUrl, car, { headers });
  }

  updateCar(car: UpdateCar): Observable<CarDetails> {
    const apiUrl = this.host + 'cars';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    return this.http.put<CarDetails>(apiUrl, car, { headers });
  }
}
