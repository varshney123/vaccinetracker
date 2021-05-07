import { Injectable } from '@angular/core';
import { apiUrls } from './apiUrls';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common'
 
@Injectable({
  providedIn: 'root'
})
export class SetuservicesService {

  constructor(private api : apiUrls,private http: HttpClient ,public datepipe: DatePipe) {   
  }

  getAllStates() {
    return this.http.get(this.api.GET.STATES).pipe(map(response => {
      return response;
    }))
  }

  getDataByPinCode(pin: any,date:any) {
    let payload : any = {
      pincode : pin,
      date : this.datepipe.transform(date, 'dd-MM-yyyy')
    }
    return this.http.get(this.api.GET.PINDATA + '?pincode=' + payload.pincode + '&date=' + payload.date).pipe(map(response => {
      return response;
    }))
  }

  getDistricts(stateId : any){
    return this.http.get(this.api.GET.DISTRICTS + '/' + stateId).pipe(map(response => {
      return response;
    }))
  }

  getDataByDistrict(distId:any,date:any){
    let payload : any = {
      district_id : distId,
      date : this.datepipe.transform(date, 'dd-MM-yyyy')
    }
    return this.http.get(this.api.GET.DISTDATA + '?district_id=' + payload.district_id + '&date=' + payload.date).pipe(map(response => {
      return response;
    }))
  }


}
