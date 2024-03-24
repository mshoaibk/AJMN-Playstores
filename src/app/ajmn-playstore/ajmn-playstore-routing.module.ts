import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjmnPlaystoreComponent } from './ajmn-playstore.component';
import { AjmnDetailComponent } from './ajmn-detail/ajmn-detail.component';
import { AuthGuardService } from './services/AuthGuardService';

const routes: Routes = [
  {
    path: '',
    component: AjmnPlaystoreComponent
  },
  {
    path: 'ajmn-details/:id',
    component: AjmnDetailComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjmnPlaystoreRoutingModule { }
