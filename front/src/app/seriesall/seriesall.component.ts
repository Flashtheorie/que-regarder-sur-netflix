import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seriesall',
  templateUrl: './seriesall.component.html',
  styleUrls: ['./seriesall.component.css']
})
export class SeriesallComponent {

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
    this.http.get('http://localhost:3001/api/series').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }

}
