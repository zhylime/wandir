import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatepostComponent } from './createpost/createpost.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'list', component: ListComponent },
  { path: 'upload', component: CreatepostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
