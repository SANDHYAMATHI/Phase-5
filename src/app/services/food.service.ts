import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FoodModel } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getAllTags(): Tag[] {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/posts";
  getFood(){
    return this.http.get<FoodModel[]>(this.url);
  }

 
  }
  
  