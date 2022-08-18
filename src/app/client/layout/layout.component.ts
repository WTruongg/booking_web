import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accUser } from 'src/app/models/user.models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router:Router) { }

  loginSuccess: any
  currentUser: accUser = new accUser;
  ngOnInit(): void {
    let ktraAdmin = localStorage.getItem('dangnhapLocal')
    if (ktraAdmin != null) {
      this.currentUser = JSON.parse(ktraAdmin)
      this.loginSuccess = true
    } else {
      this.loginSuccess = false
    }
  }

  logout(){
    localStorage.removeItem('dangnhapLocal')
    alert('Đăng xuất thành công!')
    window.location.reload();
  }
}
