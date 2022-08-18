import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { LayoutComponent } from './layout/layout.component';
import { BookComponent } from './layout/pages/book/book.component';
import { ListroomComponent } from './layout/pages/listroom/listroom.component';
import { UsersComponent } from './layout/pages/users/users.component';

const routes: Routes = [
    {
        path: "admin",
        component: LayoutComponent,
        canActivateChild : [AdminGuard],
        children: [
            {
                path:"",
                redirectTo:"listroom",
                pathMatch:"full",
            },
            {
                path: 'listroom',
                component: ListroomComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'book',
                component: BookComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
