import { Component } from '@angular/core';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route:Router){}
searchBar(value:any){
this.route.navigate(['/search'],{queryParams: {searchValue: value}})

}
}
