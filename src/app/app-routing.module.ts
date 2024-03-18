import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjmnDetailComponent } from './ajmn-playstore/ajmn-detail/ajmn-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ajmn-playstore',
    pathMatch: 'full'
  },
  {
    path: 'ajmn-playstore',
    loadChildren: () => import('./ajmn-playstore/ajmn-playstore.module').then(m => m.AjmnPlaystoreModule)
  },
  // {
  //   path: 'ajmn-details/:id',
  //   component: AjmnDetailComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
