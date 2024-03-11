import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjmnPlaystoreRoutingModule } from './ajmn-playstore-routing.module';
import { AjmnPlaystoreComponent } from './ajmn-playstore.component';
import { AjmnDetailComponent } from './ajmn-detail/ajmn-detail.component';
import { PublicComponent } from './public/public.component';
import { EnteroriseComponent } from './enterorise/enterorise.component';
import { BetaComponent } from './beta/beta.component';


@NgModule({
  declarations: [
    AjmnPlaystoreComponent,
    AjmnDetailComponent,
    PublicComponent,
    EnteroriseComponent,
    BetaComponent
  ],
  imports: [
    CommonModule,
    AjmnPlaystoreRoutingModule
  ]
})
export class AjmnPlaystoreModule { }
