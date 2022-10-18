
import { FoodModel } from 'src/app/shared/models/Food';
import { Component, Injectable, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from './api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  searchTerm:any;
  foodmodelobj: FoodModel = new FoodModel();

  foodData!: any;

  showAdd!: boolean;
  showUpdate!: boolean;
  formValue!: FormGroup;
  cartService: any;
  router: any;

  


  constructor(private formbuilder: FormBuilder,private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      cuisinetype: [''],
      description: [''],
      foodname: [''],
      offers:[''],
      price: [''],
      status: [''],

    });
    this.getAllFood();
  }
  getAllFood() {
    this.api.getFood().subscribe((res: any) => {
      this.foodData = res;
    });
  }
  search(){
    if(this.searchTerm==""){
      this.getAllFood();
    }else{
      this.foodData=this.foodData.filter((res: { searchTerm: { toLocalLowerCase: () => string; }; })=>{
        return res.searchTerm.toLocalLowerCase().match(this.searchTerm.toLocalLowerCase());
      })
    }
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  food(food: any) {
    throw new Error('Method not implemented.');
  }
}
