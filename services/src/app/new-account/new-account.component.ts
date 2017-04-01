import { AccountsService } from '../accounts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('Change Status: '+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}