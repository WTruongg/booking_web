import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ThuephongComponent } from './layout/pages/thuephong/thuephong.component';
import { ClientRoutingModule } from './client.routing';
import { HompageComponent } from './layout/pages/hompage/hompage.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LayoutComponent,
    ThuephongComponent,
    HompageComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ClientModule { }
