import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Category } from '../category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryType: Category[];
  constructor(private Service: ShopService) { }

  ngOnInit(): void {
    this.getCategoryType();
  }
  getCategoryType(): void {
    this.Service.getCategoryType()
    .subscribe(categoryType => this.categoryType = categoryType);
  }

}
