export class Food {
    id:Int16Array;
    cuisinetype:string;
    description:string;
    foodname:string;
    price:Float32Array;
    status:string;
    
    constructor(id: Int16Array,cuisinetype: string,description: string,foodname: string,price: Float32Array,status: string) { 
      this.id=id;
      this.cuisinetype=cuisinetype;
      this.description=description;
      this.foodname=foodname;
      this.price=price;
      this.status=status;
    }
}