import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car.interfaces';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  @Output() newCar: EventEmitter<Car> = new EventEmitter();
  @Output() updatedCar: EventEmitter<Car> = new EventEmitter();
  @Input() currentCar: Car;
  @Input() isEdit: boolean;
  car: Car = {
    _id: '',
    model: '',
    year: 0,
    manufacturer: '',
    plate: '',
    type: '',
    imageUrl: ''

  };


  constructor(private route: ActivatedRoute, private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {

    this.carsService.editCarEmitter.subscribe((car) => {
      this.car._id = car._id;
      this.car.manufacturer = car.manufacturer;
      this.car.model = car.model;
      this.car.year = car.year;
      this.car.plate = car.plate;
      this.car.type = car.type;
      this.car.imageUrl = car.imageUrl;
    });
  }
  clearForm(form) {
    form.resetForm();

  }
  onSubmit(form) {

    this.carsService.updateCar(this.car).subscribe(res => console.log(res));
    this.router.navigate(['/'], {
      relativeTo: this.route
    });

  }
  removeCar(car) {
    this.carsService.removeCar(car).subscribe( () =>console.log('car removed from DB') )
    this.router.navigate(['/'], {
      relativeTo: this.route
    });
    }
}


