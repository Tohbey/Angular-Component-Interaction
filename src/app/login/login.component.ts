import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
  }

  login(){
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
      console.log(response);
    });
  }

  isLoggedIn():boolean{
    return this.msalService.instance.getActiveAccount() != null
  }


  logout(){
    this.msalService.logout();
  }
}
