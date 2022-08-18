import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { HompageComponent } from './layout/pages/hompage/hompage.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { ThuephongComponent } from './layout/pages/thuephong/thuephong.component';

const routes: Routes = [
    {
        path: "client",
        component: LayoutComponent,
        children: [
            {
                path: "",
                redirectTo: "hompage",
                pathMatch: "full",
            },
            {
                path: "hompage",
                component: HompageComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'thuephong',
                component: ThuephongComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
