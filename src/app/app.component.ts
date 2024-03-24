import { Component } from '@angular/core';
import { AuthServiceService } from './ajmn-playstore/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ajmn-playstore';
  constructor(public auth: AuthServiceService){}
  ngOnInit(): void {
    this.auth.initAuthenticationListener();
  }

  login() {
    this.auth.login();
  }
}
