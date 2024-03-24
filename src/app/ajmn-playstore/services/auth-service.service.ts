import { Injectable, NgZone } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CommonService } from './common.service';
//import { UserContextService } from './user-context.service';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserContextService } from './user-context.service';
@Injectable({
  providedIn: 'root',
})

export class AuthServiceService {
  activeUser: string | undefined = 'unknown user';
  isAuthenticated: boolean = false;
  SessinData: any = {};
  username:string=''
  
  constructor(private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private commonService: CommonService,
    private userContextService: UserContextService,
    private router: Router,
    //private toastr: ToastrService
    ) 
  {
    let token = this.userContextService.user$._value== null?'':this.userContextService.user$?._value.token;
    this.username = this.userContextService.user$._value== null?'':this.userContextService.user$?._value.userinfo.surname;

      if (token =="" || token == null)
      {
      this.isAuthenticated = false
      }
      else
      {
        this.isAuthenticated = true
      } 
  }

  login() {
    debugger;
    this.msalService
      .loginPopup({
        scopes: ['User.Read'],
      })
      .subscribe(
        (response) => {  
          this.loginWithBackend(response.accessToken, response.extExpiresOn)
            .then((result) => {
              //this.toastr.success('Login successful');
              this.isAuthenticated = true;
              this.setAuthenticationStatus();
              
            })
            .catch((error) => {
           // this.toastr.error('Login failed');
            this.Staticlogout();
              return
            });
          
        },
        (error) => {
          // Handle the login error
          //this.toastr.error('Login failed');
          this.isAuthenticated = false;
        }
      );
  }

  loginWithBackend(accessToken_: any, extExpiresOn_: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // Set login model
      let userLogin = {
        accessToken: accessToken_,
        extExpiresOn: extExpiresOn_,
      };
      // Set URL
      let url = environment.ApiUrl(environment.Login);
      // Perform the asynchronous operation (post request)
      this.commonService.post(url, userLogin).subscribe(
        (jwtResponse: any) => {
          // Check the response status and resolve/reject accordingly
          if (jwtResponse.status == true) {
            this.SessinData.token = jwtResponse.token;
            this.SessinData.userinfo = jwtResponse.userinfo;
            this.username = jwtResponse.userinfo.surname
            this.userContextService.setUser(this.SessinData);
            resolve(jwtResponse); // Resolve with the response data
          } else {
            reject("Login Failed"); // Reject with an error message
          }
        },
        (error: any) => {
          //this.toastr.error('Error during login');
          reject(error); // Reject with the error
        }
      );
    });
  }

  logout() {
    this.msalService.logout({
      onRedirectNavigate: (url: string) => {
        // Set the URL to the home page
        url = "/";
  
        // Perform any additional actions before redirecting
        this.setAuthenticationStatus();
        this.userContextService.logout();
        this.isAuthenticated = false;
       // this.toastr.success('Logout successful');
  
        // Redirect to the home page
        this.router.navigate([url]);
  
        // Return false to prevent the library from performing the default redirection
        return false;
      }
    });
  }
  Staticlogout() {
    this.msalService.logout({
        onRedirectNavigate: (url: string) => {
        this.isAuthenticated = false;
        this.setAuthenticationStatus();
        this.userContextService.logout();
        // Returning false will prevent the library from redirecting
        // If you want to allow the redirection, you can omit the return statement or return true
        return false;
      },
    });
  }

  initAuthenticationListener(): void {
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setAuthenticationStatus();
      });
  }

  setAuthenticationStatus(): void {
    let activeAccount = this.msalService.instance.getActiveAccount();
    if (!activeAccount && this.msalService.instance.getAllAccounts.length > 0) {
      activeAccount = this.msalService.instance.getAllAccounts()[0];
      this.msalService.instance.setActiveAccount(activeAccount);
    }
    this.isAuthenticated = !!activeAccount;
    this.activeUser = activeAccount?.username;
  }
  
}
