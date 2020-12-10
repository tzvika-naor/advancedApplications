import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedOption = '';
  ingredients: any;
  CarModel = 'Car Model';
  manufacturers = [];
  models = [];
  years = [];

  constructor(private searchService: SearchService, private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.filter.subscribe((res: { years, model, manufacturer }) => {
      console.log(res);
      this.manufacturers = res.manufacturer;
      this.years = res.years;
      this.models = res.model;
    });

  }
}

