import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:any
ngOnInit(): void {
  this.http.get('https://restaurant.webwide.ge/api/Products/GetAll').subscribe({
    next: (data)=> {
      this.products = data
      console.log(this.products);
      
    },
    error: (error)=> {
      console.log(error);
      
    }
  })
}
  constructor(private http:HttpClient){}
}
