import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname : ['', Validators.required],
      email : ['', Validators.required],
      phone : ['', Validators.minLength(10)],
      password : ['', Validators.minLength(8)]
    })
  }

  register(){
    this.http.post<any>("http://localhost:3000/usersRegister", this.signupForm.value)
    .subscribe(res => {
      alert("Đăng ký thành công!");
      this.signupForm.reset();
      this.router.navigate(['client/login']);
    }, err => {
      alert ("Có lỗi")
    })
  }

}
