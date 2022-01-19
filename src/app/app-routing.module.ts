import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './screens/productlist/productlist.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: 
  // },
  {
    path: 'products',
    component: ProductlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
