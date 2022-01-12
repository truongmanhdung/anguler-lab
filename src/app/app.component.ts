import { Component, OnInit } from '@angular/core';
import { Inventor, IProduct } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FPT POLYTECHNIC';
  student = {
    hoten: 'Trương Mạnh Dũng',
    gioitinh: 'Nam',
    ngaysinh: '04/01/2000',
    image:
      'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/119041444_307503740550551_8009155939658957269_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iyDUAcK4HcUAX9WZNwn&tn=cwiumohlbfIyPqcu&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_3hSyUd9jYrtiHy-tRYR4uSjF2T7i8iDNbRCzSUY3THA&oe=61FFEA96',
    diemTb: 9,
  };

  inventors: Inventor[] = [
    
  ];

  ngOnInit(): void {
      let that = this;
      setTimeout(() => {
        that.inventors = [{ id: 1, first: 'Dũng', last: 'Trương', year: 2000, passed: 2090 },
        { id: 2, first: 'Hòa', last: 'Nguyễn', year: 2001, passed: 2090 },
        { id: 3, first: 'Dương', last: 'Bùi', year: 2002, passed: 2090 },
        { id: 4, first: 'Thu', last: 'NGuyễn', year: 2000, passed: 2090 },];
      }, 3000)
  }

  
}
