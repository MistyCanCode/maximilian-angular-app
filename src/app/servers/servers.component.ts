import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
  //this went where the templateUrl is now
  //template: 
  //`<app-server></app-server><app-server></app-server>`,
  
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.'
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showSecret = false;
  log = [];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='Server was created. Name is ' + this.serverName
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDetails(){
    this.showSecret = !this.showSecret;
    // let date = new Date();
    let num = this.log.length;
    this.log.push(num);
    // this.log.push(date)
  }
}
