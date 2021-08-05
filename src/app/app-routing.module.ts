import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './employees/add-edit.component';
import { LayoutComponent } from './employees/layout.component';
import { ListComponent } from './employees/list.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
      { path: '', component: ListComponent },
      { path: 'add', component: AddEditComponent },
      { path: 'edit/:id', component: AddEditComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }