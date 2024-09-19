import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder)
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  toasterService = inject(ToastrService)

  productForm : FormGroup = this.formBuilder.group({
    name:['',[Validators.required]],
    brand :['',[Validators.required]],
    image:[''],
    currentPrice:[''],
    standardPrice:[''],
    discountedPrice:['']
  })

  productId!: number; // Store product ID as a number

  ngOnInit(): void {

    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product ID:', this.productId); 
    // Convert the product ID from string to number
    // this.productId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch existing product data
    this.productService.getProductsById(this.productId).subscribe((product) => {
      // Patch the form with the product data
      this.productForm.patchValue({
        name: product.name,
        brand: product.brand,
        image: product.image,
        currentPrice: product.currentPrice,
        standardPrice: product.standardPrice,
        discountedPrice: product.discountedPrice
      });
    });
  }


  // editProduct(){
  //   if(this.productForm.invalid){
  //     alert("Please fill all field with valid input");
  //     return
  //   }
  //   const updatedProduct = {
  //     ...this.productForm.value,
  //     id: this.productId  // Ensure the product ID is included
  //   };
  //   console.log("Edited",this.productForm.value);
  //   this.productService.updateProduct(this.productForm.value).subscribe(result =>{
  //     alert("Product Updated");
  //     this.router.navigateByUrl("/")
  //   })
  // }


  editProduct() {
    if (this.productForm.invalid) {
      this.toasterService.error("Please fill all fields with valid input");
      return;
    }
    
    // Create the updated product object with the ID
    const updatedProduct: Product = {
      ...this.productForm.value,  // Form values for name, brand, etc.
      id: this.productId  // Include the product ID for the update
    };
  
    // Call the updateProduct method from the service
    this.productService.updateProduct(updatedProduct).subscribe(result => {
      this.toasterService.success("Product Updated Successfully");
      this.router.navigateByUrl("/");  // Navigate back to home or product list page
    }, error => {
      console.error("Error updating product:", error);  // Handle errors
      alert("Failed to update product.");
    });
  }
  
}
