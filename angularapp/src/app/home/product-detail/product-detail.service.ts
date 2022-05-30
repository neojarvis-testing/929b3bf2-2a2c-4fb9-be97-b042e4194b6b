import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordermodel } from 'src/app/model/ordermodel';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  apiUrl : string;
  productId:any;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/home/'; 
  }

  setid(data:any){
    this.productId = data;
    this.apiUrl = 'http://localhost:8080/home/'+this.productId;
  }
  public addCart(Quantity:String,userId:String):Observable<String>{
    console.log(Quantity);
    
    return this.http.post<String>(this.apiUrl,(Quantity+' '+userId));
  }

  placeOrder(order:Ordermodel):Observable<String>{
    this.apiUrl = 'http://localhost:8080/placeOrder';
    return this.http.post<String>(this.apiUrl,order);
  }
} 
