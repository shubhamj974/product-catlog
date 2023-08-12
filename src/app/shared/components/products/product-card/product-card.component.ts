import { Iproduct } from 'src/app/shared/models/product.Interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() dataFromParent !: Array<Iproduct>
  constructor() { }

  ngOnInit(): void {

  }

}
