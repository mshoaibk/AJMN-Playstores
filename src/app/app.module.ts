import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { MSAL_INSTANCE, MsalBroadcastService, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormsModule } from '@angular/forms';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(environment.msalConfig);
}
@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
   { provide: LocationStrategy, useClass: HashLocationStrategy },
   MsalService,
  MsalBroadcastService,
  ],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule {
  constructor(private authService: MsalService) {
    this.authService.handleRedirectObservable().subscribe(
      (authResult) => {
        console.log('Redirect success:', authResult.account.username);
      },
      (error) => {
        console.error('Redirect error:', error);
      }
    );
  }
 }
