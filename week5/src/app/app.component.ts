import { Component } from '@angular/core';

import {categoryType} from './category';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starbucks-shop';
  categoryType = categoryType;
}
