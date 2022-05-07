import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  data: any | undefined = [];
  http: any;
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
    console.log(this.data);
    if (this.data != ''){
      sessionStorage.setItem('name', username);
      sessionStorage.setItem('password', password);
      //window.location.href = '/profil/' + username;
    }
    else{
      console.log('Incorrect username or password')
    }
    }, error => console.error(error));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
