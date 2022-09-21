import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {  

  userName = '';
  userEntered = false;
  welcomeMsg = '';
  allowNewUser = true;

  constructor() { }

  ngOnInit(): void {
  }

  onUserEntry() {
    if (this.userName == ''){
      alert('Please enter username.');
    }else{
      this.userEntered = true;
      this.welcomeMsg = 'Welcome ' + this.userName;
      this.allowNewUser = true;
    }

  }
  onUpdateUserName(event: any){
    console.log(event)
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
