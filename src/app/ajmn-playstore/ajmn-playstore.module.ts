import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjmnPlaystoreRoutingModule } from './ajmn-playstore-routing.module';
import { AjmnPlaystoreComponent } from './ajmn-playstore.component';
import { AjmnDetailComponent } from './ajmn-detail/ajmn-detail.component';
import { PublicComponent } from './Versions/versions.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjmnPlaystoreComponent,
    AjmnDetailComponent,
    PublicComponent,
    
  ],
  imports: [
    CommonModule,
    AjmnPlaystoreRoutingModule,
    FormsModule
  ]
})
export class AjmnPlaystoreModule { }
