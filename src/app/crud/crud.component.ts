import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { FoodModel } from './crud.model';
import { ApiService } from '../shared/api.service';

@Component({
  
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
 
})
export class crudComponent implements OnInit {
  formValue!: FormGroup;
  foodmodelobj: FoodModel = new FoodModel();

  foodData!: any;

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

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
 

  postFoodDetails() {
    this.foodmodelobj.cuisinetype = this.formValue.value.cuisinetype;
    this.foodmodelobj.description = this.formValue.value.description;
    this.foodmodelobj.foodname = this.formValue.value.foodname;
    this.foodmodelobj.offers = this.formValue.value.offers;
    this.foodmodelobj.price = this.formValue.value.price;
    this.foodmodelobj.status = this.formValue.value.status;

    this.api.postFood(this.foodmodelobj).subscribe(
      (res) => {
        console.log(res);
        alert('Item added Successfully');
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllFood();
      },
      (err) => {
        alert('something worng happen');
      }
    );
  }

  getAllFood() {
    this.api.getFood().subscribe((res) => {
      this.foodData = res;
    });
  }

  deleteFood(row: any) {
    this.api.deleteFood(row.id).subscribe((res) => {
      alert('Item Deleted Sucessfully');
      this.getAllFood();
    });
  }
  onEdit(row: any) {
    this.foodmodelobj.id = row.id;
    this.formValue.controls['cuisinetype'].setValue(row.cuisinetype);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['foodname'].setValue(row.foodname);
    this.formValue.controls['offers'].setValue(row.offers);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['status'].setValue(row.status);
    this.showAdd = false;
    this.showUpdate = true;
  }
  updateFoodDetails() {
    this.foodmodelobj.cuisinetype = this.formValue.value.cuisinetype;
    this.foodmodelobj.description = this.formValue.value.description;
    this.foodmodelobj.foodname = this.formValue.value.foodname;
    this.foodmodelobj.offers = this.formValue.value.offers;
    this.foodmodelobj.price = this.formValue.value.price;
    this.foodmodelobj.status = this.formValue.value.status;
    this.api.updateFood(this.foodmodelobj, this.foodmodelobj.id)
      .subscribe((res) => {
        alert('Updated');
        let ref = document.getElementById('Cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllFood();
      });
  }

  clickAddFood() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
}
