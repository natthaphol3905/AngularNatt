import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add", component: AddPageComponent },
  { path: "edit/:id", component: EditPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
