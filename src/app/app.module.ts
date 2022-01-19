import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './screens/welcome/welcome.component';
import { ProductlistComponent } from './screens/productlist/productlist.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgePipe } from './pipes/age.pipe';
import { StarComponent } from './components/star/star.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductlistComponent,
    ProductDetailComponent,
    HeaderComponent,
    AgePipe,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
