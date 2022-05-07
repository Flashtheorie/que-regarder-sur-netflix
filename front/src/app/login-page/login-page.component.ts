import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  data: any | undefined = [];
  saveSession(username:string){
    sessionStorage.setItem('name', username);
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  connect(username, password){
    
    this.http.get('http://localhost:3001/connect/'+ username + '/'+ password).subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    if (this.data != ''){
      sessionStorage.setItem('name', username);
      window.location.href = '/profil/' + username;
    }
    else{
      console.log('Incorrect username or password')
    }
    }, error => console.error(error));
   
  }
  constructor(private http: HttpClient) {
  
  
  }

  ngOnInit(): void {
  }

}
