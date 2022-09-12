import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-restricted-page',
  templateUrl: './restricted-page.component.html',
  styleUrls: ['./restricted-page.component.scss']
})
export class RestrictedPageComponent implements OnInit {
  username: any;

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
    this.getName();
  }

  getName(){
    console.log(this.msalService.instance);
    this.username = this.msalService.instance.getActiveAccount()?.name;
  }

}
