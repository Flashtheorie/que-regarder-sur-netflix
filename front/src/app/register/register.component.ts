import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  data: any | undefined = [];
  saveSession(username:string, password:string){
    sessionStorage.setItem('name', username);
    sessionStorage.setItem('password', password);
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  register(username, password){
    
    this.http.get('http://localhost:3001/register/'+ username + '/'+ password).subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    
      sessionStorage.setItem('name', username);
      sessionStorage.setItem('password', password);
      window.location.href = '/profil/' + username;
    
    }, error => console.error(error));
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
