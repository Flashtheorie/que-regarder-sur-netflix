import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
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
