import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  saveSession(username:string, password:string){
    sessionStorage.setItem('name', username);
    sessionStorage.setItem('password', password);
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  data: any | undefined = [];
  constructor(private http: HttpClient) {
    //console.log(router.url);

    this.http.get('http://localhost:3001/connect/' + sessionStorage.getItem('name') + '/' + sessionStorage.getItem('password')).subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
