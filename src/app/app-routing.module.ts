import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ajmn-playstore',
    pathMatch: 'full'
  },
  {
    path: 'ajmn-playstore',
    loadChildren: () => import('./ajmn-playstore/ajmn-playstore.module').then(m => m.AjmnPlaystoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
