import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  showMenu: boolean | undefined;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  } 
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    localStorage['theme'] = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    if (document.documentElement.classList.contains('dark')){
      sessionStorage.setItem('theme', 'dark');
    }
    else if (document.documentElement.classList.contains('light')){
    sessionStorage.setItem('theme', 'light');     
    }
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }  
}
