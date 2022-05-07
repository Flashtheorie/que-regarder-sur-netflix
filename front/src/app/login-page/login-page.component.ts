import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  saveSession(username:string){
    sessionStorage.setItem('name', username);
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
