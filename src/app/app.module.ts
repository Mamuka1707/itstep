import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ReklamComponent } from './reklam/reklam.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ProductsComponent,
    ReklamComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
