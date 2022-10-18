import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';
import { FoodModel } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
   
  }

}
