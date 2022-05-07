import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  saveSession(){
    sessionStorage.setItem('name', 'Antoine');
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  logout() {
    sessionStorage.clear();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
