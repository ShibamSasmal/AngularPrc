import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';
import { Product } from '../../types/product';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,SearchComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css' 
})
export class HomeComponent {
  // products = [1,2,3,4,5]
  products:Product[]=[]

  filterProducts: Product[] = [];

  productService = inject(ProductService)
  router = inject(Router);
  ngOnInit(){
    // this.products = this.productService.products;
    // this.productService.getProducts().subscribe((result) => console.log(result))

    this.productService.getProducts().subscribe((result) => {
      // console.log(result);
      this.products = result as Product[];
      this.filterProducts = this.products;
    });
  }
  


  onViewProduct(event : any){
    console.log("OnViewProduct",event)
    this.router.navigateByUrl("/product/"+event)
  }

  onSearch(search : string){
    console.log("Home",search)
    if (search){
      this.filterProducts = this.products.filter( x => x.name.toLowerCase().includes(search.toLowerCase()));
    }
    else{
      this.filterProducts  = this.products;
    }
  }

}
