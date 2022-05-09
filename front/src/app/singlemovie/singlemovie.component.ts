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
  user: any;
  vote: any;
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
reloadPage() {
  window.location.reload();
}

addToFavorites(username, movie){
  this.http.get('http://localhost:3001/api/votes/' + username + '/' + movie).subscribe(vote => {
    this.vote.push(vote);
  //console.log('http://localhost:3001/api/votes/' + username + '/' + movie)
})
}

RemoveFromFavorites(username, movie){
  this.http.get('http://localhost:3001/api/devotes/' + username + '/' + movie).subscribe(vote => {
    this.vote.push(vote);
  //console.log('http://localhost:3001/api/devotes/' + username + '/' + movie)
})
}

  constructor(private http: HttpClient, router: Router) {
    //console.log(router.url);
    const url = router.url.split('/');
    const id = url[2];
    this.http.get('http://localhost:3001/connect/' + sessionStorage.getItem('name') + '/' + sessionStorage.getItem('password')).subscribe(user => {
      this.user.push(user);
      //console.log(this.user);
      }, error => console.error(error));
      
    this.http.get('http://localhost:3001/movies/' + id).subscribe(data => {
    this.data.push(data);
    
    this.http.get('http://localhost:3001/api/checkIfVoted/' + sessionStorage.getItem('name') + '/' + this.data[0]._id ).subscribe(hasvoted => {
    this.hasvoted.push(hasvoted);
    
    if (hasvoted == null) {
      this.voted = 1
      //console.log(hasvoted);
    }
    else {
      this.voted = 0;
      //console.error(hasvoted);
    }
    
    }, error => console.error(error));

    }, error => console.error(error));
  }
}