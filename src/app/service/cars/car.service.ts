import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../../model/car/car.model';
import { Page } from '../../../model/page.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private host = environment.apiUrl;

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
}
