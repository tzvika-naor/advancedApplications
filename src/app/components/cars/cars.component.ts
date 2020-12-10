import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car.interfaces';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  @Output() currentCarEmitter = new EventEmitter<Car>();

  cars: Car[];
  isEdit = false;
  currentCar: Car = {
    _id: '',
    manufacturer: '',
    model: '',
    year: 0
  };
  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.FetchCars();
  }
  public FetchCars() {
    this.carsService.getAllCars().subscribe(res => {

      this.cars = res.cars;
      console.log(this.cars);
      const carYears = [];
      const carModel = [];
      const carTypes = [];
      const carManufacturer = [];
      res.cars.map((car, i) => {
        carYears.push(car.year);
        carModel.push(car.model);
        carManufacturer.push(car.manufacturer);
      });

      // getting uniq once not returning on the same element twice
      const uniqSortedYears = [];
      const uniqSortedModels = [];
      const uniqSortedManufacturer = [];

      const uniqModels = [...new Set(carModel)];
      uniqSortedModels.push(...uniqModels.sort());

      const uniqYears = [...new Set(carYears)];
      uniqSortedYears.push(...uniqYears.sort());

      const uniqManufacturer = [...new Set(carManufacturer)];
      uniqSortedManufacturer.push(...uniqManufacturer.sort());



      console.log(uniqSortedYears);
      this.carsService.storeDataByAttributes(uniqSortedModels, uniqSortedManufacturer, uniqSortedYears);
    });

  }

  editCar(car, i) {
    this.isEdit = true;
    this.currentCar = car;
    this.carsService.getCar(car._id);
    this.router.navigate([`car-edit/${i}`], { relativeTo: this.route });
  }
  removeCar(car) {
  this.carsService.removeCar(car).subscribe( )
  }


}
