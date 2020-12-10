import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from '../interfaces/car.interfaces';

const apiURL = 'http://localhost:3000/api';

@Injectable({providedIn: 'root'})
export class CarsService {

  editCarEmitter = new Subject<Car>();
  public filter = new Subject<object>();
  private carsUrl = apiURL + '/cars';
  constructor(private http: HttpClient) { }


  public getAllCars() {
    return this.http.get<{ cars: Car[], message: string, maxCars: number }>(`${this.carsUrl}`);
  }
  storeDataByAttributes(years, model, manufacturer) {
    this.filter.next({ years, model, manufacturer });
  }
  provideFilters(): Observable<object> {
    return this.filter.asObservable();
  }
  editCar(car: Car) {

  }
  getCar(id: string) {
    // console.log(id);
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).subscribe(res => {
      this.editCarEmitter.next(res);
    });

  }

  updateCar(car: Car) {
    console.log(car);
    const url = `${this.carsUrl}/${car._id}`;
    return this.http.put(url, car);
  }
  removeCar(car){
    const url = `${this.carsUrl}/${car._id}`;
    return this.http.delete(url, car);

  }
}