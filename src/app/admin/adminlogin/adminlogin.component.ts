import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  public loginform!: FormGroup
  constructor(private formBuilder : FormBuilder, private http :HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      adminid: [''],
      password:['']
    })
  }
login(){
  this.http.get<any>(" http://localhost:3000/registeradmin")
  .subscribe(res=>{
    const user =res.find ((a:any)=>{
      return a.adminid === this.loginform.value.adminid && 
      a.password === this.loginform.value.password
    });
    if(user){
      alert("Login Success");
      this.loginform.reset();
      this.router.navigate(['crud'])
    }else{
      alert("User not found");
    }
    },err=>{
      alert("Something went wrong")
    })
  }

}
