import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ListroomComponent } from './layout/pages/listroom/listroom.component';
import { AdminRoutingModule } from './admin.routing';
import { UsersComponent } from './layout/pages/users/users.component';
import { BookComponent } from './layout/pages/book/book.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    ListroomComponent,
    UsersComponent,
    BookComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
