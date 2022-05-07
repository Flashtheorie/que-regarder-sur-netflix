import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SingleMovieComponent {
  title = 'apprenants';
  currentRoute: string | undefined;
  data: any | undefined = [];
  router: any;
  constructor(private http: HttpClient, router: Router) {
    //console.log(router.url);
    const url = router.url.split('/');
    const id = url[2];
    this.http.get('http://localhost:3001/movies/' + id).subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }
}