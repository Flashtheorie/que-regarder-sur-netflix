import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  url: string[];
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  logout() {
    sessionStorage.clear();
  }
  constructor(public http: HttpClient, router: Router) {
    //console.log(router.url);
    const url = router.url.split(',');
    this.url = url


    // link de la page = this.url
    
  }

  ngOnInit(): void {
  }

}
