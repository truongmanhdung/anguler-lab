import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modules/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  constructor() {}

  products: IProduct[] = [];
  productList: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
      check: false,
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
      check: false,
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022'      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
      check: false,
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
      check: false,
    },
  ];
  loading = false;
  searchText = '';
  filter(e: any){
    this.searchText = e.target.value;
    let productFilter = this.productList.filter((product: IProduct) => product.productName.toLowerCase().includes(e.target.value.toLowerCase()));
    this.products = productFilter;
  }
  hideImage(image: String) {
    let productHide = this.productList.find((product: IProduct) => product.imageUrl === image);
    if(productHide){
      productHide.check = !productHide.check;
    }
  }
  ngOnInit(): void {
    let that = this;
    that.loading = true;
    setTimeout(() => {
      that.products = that.productList;
      that.loading = false;
    }, 2000);
  }
}
