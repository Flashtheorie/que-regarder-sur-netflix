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
  
}
