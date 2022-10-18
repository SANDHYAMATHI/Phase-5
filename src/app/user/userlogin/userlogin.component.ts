import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public loginform!: FormGroup
  constructor(private formBuilder : FormBuilder, private http :HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      username: [''],
      password:['']
    })
  }
login(){
  this.http.get<any>(" http://localhost:3000/register")
  .subscribe(res=>{
    const user =res.find ((a:any)=>{
      return a.username === this.loginform.value.username && 
      a.password === this.loginform.value.password
    });
    if(user){
      alert("Login Success");
      this.loginform.reset();
      this.router.navigate(['home'])
    }else{
      alert("User not found");
    }
    },err=>{
      alert("Something went wrong")
    })
  }

}

