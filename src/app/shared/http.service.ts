import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newCustomerSalaried } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:3000/'

  postNewCustomer(endpoint:string,customerData:newCustomerSalaried){
    let url = this.baseUrl +endpoint
    return this.http.post<newCustomerSalaried>(url,customerData)
  }
  getExistingCustomer(endpoint:string){
    let url = this.baseUrl +endpoint
    return this.http.get<newCustomerSalaried[]>(url)
  }
}
