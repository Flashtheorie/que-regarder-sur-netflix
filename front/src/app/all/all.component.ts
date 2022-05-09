import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  title = 'apprenants';
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  logout() {
    sessionStorage.clear();
  }
  data: any | undefined = [];
  router: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3001/api/films').subscribe(data => {
    this.data.push(data);
    if (this.data != undefined) {
      //console.log(this.data);
    }
    });
  }
}
