import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

	let data = [{
	"flightId": 123,
	"source": "Pune",
	"destination": "Seattle",
	"price": 34700,
	"depart": "10 AM",
	"arrive": "8 PM"
}, {
	"flightId": 124,
	"source": "Pune",
	"destination": "Seattle",
	"price": 34700,
	"depart": "10 AM",
	"arrive": "8 PM"
}];
  constructor() { }
}
