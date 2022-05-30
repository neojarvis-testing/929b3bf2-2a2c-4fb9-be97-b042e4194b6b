import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordermodel } from '../model/ordermodel';

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  apiUrl : string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/orders'; 
  }

  getProducts(id:String):Observable<Ordermodel[]>{
    return this.http.post<Ordermodel[]>(this.apiUrl,id);
  }
}
