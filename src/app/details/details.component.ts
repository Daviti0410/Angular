import { Component, inject } from '@angular/core';
import {HousingLocation} from '../housing-location';
import {HousingService} from '../housing.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
housingService: HousingService = inject(HousingService);
housingLocation!: HousingLocation;
route: ActivatedRoute = inject(ActivatedRoute);

constructor() {
  const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
  this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)!;
}
}
