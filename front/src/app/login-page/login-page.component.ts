import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  data: any | undefined = [];
  error: boolean;
  errorMessage: string
  saveSession(username:string, password:string){
    sessionStorage.setItem('name', username);
    sessionStorage.setItem('password', password);
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }

  connect(username, password){
    
    this.http.get('http://localhost:3001/connect/'+ username + '/'+ password).subscribe(data => {
    this.data.push(data);
    
    if (this.data != '' && this.data[0].username == username && this.data[0].password == password){
      this.error = false;
      sessionStorage.setItem('name', username);
      sessionStorage.setItem('password', password);
      //window.location.href = '/profil/' + username;
    }
    else
    {
      this.error = true;
      this.errorMessage = "Mot de passe ou nom d'utilisateur incorrect"
    }
    
    }, error => console.error(error));
   
  }
  constructor(private http: HttpClient) {
  
  
  }

  ngOnInit(): void {
  }

}
