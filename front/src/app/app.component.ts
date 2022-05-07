import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  saveSession(){
    sessionStorage.setItem('name', 'Antoine');
  }
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
}
