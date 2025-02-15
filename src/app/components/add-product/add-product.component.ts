import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product : Product = 
  {
    name: "",
    brand : "",
    image : "",
    currentPrice : 0,
    standardPrice : 0,
    discountedPrice :0,
  }
  productService = inject(ProductService)
  router = inject(Router)
  addProduct(){
    console.log("Form Submitted", this.product);
    this.productService.addProduct(this.product).subscribe(result =>{
      alert("Product Saved");
      this.router.navigateByUrl("/");
    });
  }
}
