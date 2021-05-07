import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { SetuservicesService } from '../setuservices.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  states : any;
  pincode: any;
  dateOfSearch:any;
  selectedState:any;
  selectedDistrict:any;
  districts:any;
  @Output() details = new EventEmitter();


  constructor(private service : SetuservicesService) { }

  ngOnInit(): void {
    this.service.getAllStates().subscribe((res:any) => {
      this.states = res['states'];
    })
  }

  searchByPincode(pin: any,date : any) {
    this.service.getDataByPinCode(pin,date).subscribe((res) => {
      this.details.emit(res);
    })
  }

  getDistricts(state:any) {
    this.service.getDistricts(state).subscribe((res:any) => {
      this.districts = res['districts'];
    })
  }

  searchByDistrict(districtId:any,date:any){
    this.service.getDataByDistrict(districtId,date).subscribe((res) => {
      this.details.emit(res);
    })
  }

}
