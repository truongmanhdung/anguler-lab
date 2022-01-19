import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  constructor() {}
  @Input() starRating: number = 0;
  @Input() ProductId: any;
  @Output('checkStar') voted = new EventEmitter<any>()

  ngOnInit(): void {}
  counter(i: number) {
    return new Array(i);
  }

  setStar(index: any){
    const data = {
      id: this.ProductId,
      starRating: index
    }
    this.voted.emit(data) 
  }
}
