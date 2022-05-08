import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-connected',
  templateUrl: './navbar-connected.component.html',
  styleUrls: ['./navbar-connected.component.css']
})
export class NavbarConnectedComponent {

  showMenu: boolean | undefined;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  } 
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  logout() {
    sessionStorage.clear();
  }
  toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    localStorage['theme'] = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }  
  data: any | undefined = [];
  user: any | undefined = [];
  constructor(private http: HttpClient) {
    //console.log(router.url);

    this.http.get('http://localhost:3001/connect/' + sessionStorage.getItem('name') + '/' + sessionStorage.getItem('password')).subscribe(data => {
    this.data.push(data);
    //console.log(this.data);
    }, error => console.error(error));

    this.http.get('http://localhost:3001/connect/' + sessionStorage.getItem('name') + '/' + sessionStorage.getItem('password')).subscribe(user => {
      this.user.push(user);
      //console.log(this.user);
      }, error => console.error(error));
  }
}
