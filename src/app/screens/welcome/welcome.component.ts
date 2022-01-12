import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {

  }

  Image= [
    'https://cf.shopee.vn/file/67152bbd92be481d44c5369b039d197b',
    'https://galle.vn/images/products/2018/11/30/large/qxa695b_1543546833.png',
    'https://cdn.tgdd.vn/Products/Images/7264/241152/citizen-bh5003-51l-namava-600x600.jpg',
    'https://cdn.tgdd.vn/Products/Images/7264/237829/untitled-1-600x600.jpg'
  ]
  hidden = true
  

  imgIndex = 0;
  ngOnInit(): void {
    let that = this;
    setInterval(() => {
      that.imgIndex ++;
      if(that.imgIndex === that.Image.length) {
        that.imgIndex = 0
      }
    }, 1000)
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  

  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  textInput = "";

  // onchangeText(e: any){
  //   this.textInput = e.target.value
  // } 

}
