import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',Validators.minLength(8)]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/usersRegister")
    .subscribe(res => {
      let user  = res.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        alert("Đăng nhập thành công!")
        this.loginForm.reset();
        localStorage.setItem('dangnhapLocal', JSON.stringify(user))
        this.router.navigate(['client/thuephong']);
      }else{
        alert("Đăng nhập không thành công!")
      }
    }, err => {
      alert("Có lỗi!")
    })
  }

}
