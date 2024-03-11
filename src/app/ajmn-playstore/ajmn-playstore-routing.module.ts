import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjmnPlaystoreComponent } from './ajmn-playstore.component';
import { AjmnDetailComponent } from './ajmn-detail/ajmn-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AjmnPlaystoreComponent
  },
  {
    path: 'ajmn-details',
    component: AjmnDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjmnPlaystoreRoutingModule { }
