import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  template: `
<div class="container-fluid">
<div class="row" *ngIf="posts.length; else nousers">
<div class="col-md-4" *ngFor="let p of posts ; index as i">
<mat-card class="example-card">
  <mat-card-header>
    <mat-card-title>{{p.Title | titlecase | noneenglish}}</mat-card-title>
  </mat-card-header>
  <img mat-card-image src="{{p.imge}}">
  <mat-card-content>
  <p><strong>Year: </strong> {{p.Year}}</p>  <p><strong>Runtime: </strong> {{p.Runtime}}</p> <p> <strong>Genre: </strong> {{p.Genre}}</p> <p>  <strong>Director: </strong> {{p.Director}} </p>
  </mat-card-content>
  <mat-card-actions>
  <div class="row justify-content-center">
  <button mat-mini-fab color="wihte" routerLink="/movie/{{i}}/edit">
  <mat-icon svgIcon="edit"></mat-icon>
</button>
<button mat-mini-fab color="wihte" routerLink="/movie/{{i}}/delete">
  <mat-icon svgIcon="delete"></mat-icon>
</button>
</div>
  </mat-card-actions>
</mat-card>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="footer">
<div class="footer-copyright text-center py-3">© 2018 Copyright: oshrit malach assignment 
    </div></div>
</div>
</div>

<ng-template #nousers>
<h1>There is no movies in the list, Add some:) 
</h1>
</ng-template>


</div>

  `,
  styles: [`
    .container-fluid {
      margin-top:20px;
    }
    .example-card {
      max-width: 500px;
    }
    .editB{
      width:10px;
      margin-top:10px;
    }
    .buttons{
      text-align: center;
    }
    .footer{
      margin-top:20px;
      height:50px;
      background-color:#b5e0e6
    }
    
    
  `]
})
export class ListComponent implements OnInit {

  posts: any = [];
  images:any = []
  constructor(private data:DataService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/edit.svg'));
      iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/dustbin.svg'));
   }
  ngOnInit() {    
    this.posts=this.data.allMovices();
  }
}


