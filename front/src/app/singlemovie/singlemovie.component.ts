import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SingleMovieComponent implements OnInit{
  getSessionInfos(){
    return sessionStorage.getItem('name');
  }
  logout() {
    sessionStorage.clear();
  }
  
  title = 'apprenants';
  currentRoute: string | undefined;
  data: any | undefined = [];
  hasvoted: any | undefined = [];
  router: any;
  voted: number = 0;
ngOnInit(): void {
  
}
  

  constructor(private http: HttpClient, router: Router) {
    //console.log(router.url);
    const url = router.url.split('/');
    const id = url[2];
    
    this.http.get('http://localhost:3001/movies/' + id).subscribe(data => {
    this.data.push(data);
    
    this.http.get('http://localhost:3001/api/checkIfVoted/' + sessionStorage.getItem('name') + '/' + this.data[0]._id ).subscribe(hasvoted => {
    this.hasvoted.push(hasvoted);
    
    if (hasvoted == null) {
      this.voted = 1
      console.log(hasvoted);
    }
    else {
      this.voted = 0;
      console.error(hasvoted);
    }
    
    }, error => console.error(error));

    }, error => console.error(error));
  }
}