import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Iproduct } from 'src/app/shared/models/product.Interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output() dataFromChild: EventEmitter<Iproduct> = new EventEmitter();
  @ViewChild("productName") productName !: ElementRef;
  @ViewChild("productCatlog") productCatlog !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onProductAdd() {
    const obj: Iproduct = {
      pName: this.productName.nativeElement.value,
      pDiscription: this.productCatlog.nativeElement.value,
      pCatg: "product"
    }
    this.productName.nativeElement.value = ''
    this.productCatlog.nativeElement.value = ''
    this.dataFromChild.emit(obj)
  }

  onCatlogAdd() {
    const obj2: Iproduct = {
      pName: this.productName.nativeElement.value,
      pDiscription: this.productCatlog.nativeElement.value,
      pCatg: "catlog"
    }
    this.productName.nativeElement.value = ''
    this.productCatlog.nativeElement.value = ''
    this.dataFromChild.emit(obj2)
  }
}
