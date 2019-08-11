import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) { }
  url = 'http://localhost:8080/products'
  // url = 'http://18.136.194.253:8080/products'

  getAllProducts() {
    return this.httpClient.get(`${this.url}/`)
  }

  addProduct(productName, category, price) {
    const data = {
      productName : productName,
      category : category,
      price : price
    }
    this.httpClient.post(`${this.url}/add` , data).subscribe(
      res => alert ("Save Product Success")
    )
      
    
  }

  deleteProduct(id) {
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  loadDetailProduct(id) {
    return this.httpClient.get(`${this.url}/${id}`)
  }

  updateProduct(id, productName, category, price) {
    const data = {
      productName : productName,
      category : category,
      price : price
    }
    this.httpClient.put(`${this.url}/${id}` , data).subscribe(
      res => alert ('Update')
    );
  }
}
