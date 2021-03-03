import { Component, OnInit } from '@angular/core';
import { ShopService} from '../shop.service';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  id;
  constructor(
    private route: ActivatedRoute,
    private Service: ShopService,
  ) { }

  ngOnInit(): void {
    this.getCategoryId();
    this.getProducts();
  }
  getCategoryId():void{
    this.id = +this.route.snapshot.paramMap.get('categoryId');
   
  }
  getProducts():void{
  this.Service.getProducts(this.id)
  .subscribe(products => this.products = products);
  }

}
