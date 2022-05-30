import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Productmodel} from '../model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/admin';
  }

  public getProduct():Observable<Productmodel[]>{
      return this.http.get<Productmodel[]>(this.apiUrl);
  }

}
