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
  
  toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    localStorage['theme'] = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }  
}
