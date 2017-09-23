import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  locations: Location[] = [
	new Location('Johnstons Gardens', 'Aberdeen', 'Scotland'),
	new Location('Mirador del Rio', 'Lanzarote', 'Canary Islands')
  ];

  constructor() { }

  ngOnInit() {
  }

}
