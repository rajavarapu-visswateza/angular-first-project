import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient : HttpClient) { 

  }

  // getProducts(){
  //   return this.httpClient.get("https://fakestoreapi.com/products")
  // }

  getProducts(): Observable<product[]> {
    return this.httpClient.get<product[]>('https://fakestoreapi.com/products') || [];
  }
}
