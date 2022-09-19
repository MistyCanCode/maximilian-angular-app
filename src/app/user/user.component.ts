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

  constructor() { }

  ngOnInit(): void {
  }

  onUserEntry() {
    if (this.userName == ''){
      alert('Please enter username.');
      this.userEntered = false;
    }else{
      this.userEntered = true;
      this.welcomeMsg = 'Welcome ' + this.userName;
    }

  }

}
