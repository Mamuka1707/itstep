import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  receivedData: any;
  productData:any

  constructor(private route: ActivatedRoute,private http:HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.receivedData = params['searchValue']
      console.log(this.receivedData);
      if(this.receivedData === ''){
        console.log('error');
        this.productData = []
      }else {
        this.http.get('https://restaurant.webwide.ge/api/Products/GetAll').subscribe({
          next: (data:any) => {
       this.productData = data.filter((product:any)=> this.filterSearch(product))
   console.log(this.productData);
   
          },
          error: (error)=> {
            console.log(error);
            
          }
        })
      }
    });
  }
  filterSearch(product:any){
    if(product && product.name){
      return product.name.toLowerCase().includes(this.receivedData.toLowerCase())
    }
    return false
  }
}
