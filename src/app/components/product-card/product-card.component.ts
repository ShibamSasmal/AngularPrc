import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input,Output,EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../types/product';
import { CurrPipe } from '../../curr.pipe';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,UpperCasePipe,CurrPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 @Input() product! : Product;
 @Output() viewProduct = new EventEmitter<number>();

 view(){
  console.log("Button clicked");
  this.viewProduct.emit(this.product.id);
}
}
