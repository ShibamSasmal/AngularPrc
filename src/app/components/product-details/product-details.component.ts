import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule,CommonModule,RouterLink,MatButtonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product! : Product;
  productService = inject(ProductService);
 activatedRoute = inject(ActivatedRoute)
  ngOnInit(){
    
    // let productId =1;
    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductsById(productId).subscribe(result=>{
      this.product = result;  
    })
  }  
  
}
