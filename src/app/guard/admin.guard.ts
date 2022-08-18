import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(private router: Router){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let ktraAdmin = localStorage.getItem('dangnhapLocal')
      if(ktraAdmin != null){
        let ktraAdminParse = JSON.parse(ktraAdmin)
        if(ktraAdminParse.isAdmin){
          return true
        }else{
          alert("Bạn hổng phải là Admin")
          this.router.navigate(['client/login'])
          return false
        }
      }else{
        alert("Bạn cần đăng nhập")
        this.router.navigate(['client/login'])
        return false;
      }
  }
  
}
