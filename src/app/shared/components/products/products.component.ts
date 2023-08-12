import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product.Interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productArray: Array<Iproduct> = []

  constructor() { }

  ngOnInit(): void {
  }

  onDataAccess(e: Iproduct) {
    this.productArray.push(e)
  }
}
