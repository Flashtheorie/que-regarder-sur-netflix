import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  data: any | undefined = [];
  error: boolean = false;
  errorMessage: string;
  saveSession(username:string, password:string){
    sessionStorage.setItem('name', username);
    sessionStorage.setItem('password', password);
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  register(username, password){
    
    // Check if the user already exists
    this.http.get('http://localhost:3001/api/checkifuserexist/'+ username).subscribe(data => {
    this.data.push(data);
    if (this.data[0] == null)
    {
      this.http.get('http://localhost:3001/register/'+ username+ '/'+ password).subscribe(data => {
      sessionStorage.setItem('name', username);
      sessionStorage.setItem('password', password);
      window.location.href = '/profil/' + username;
      console.log("Connecté ! ")
    })
    }
    else{
      this.error = true;
      this.errorMessage = "Ce compte existe déja";
      console.log(this.data[0]);
    }
    
      
    
    }, error => console.error(error));
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
