import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div id="main">
    <app-header></app-header>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
  #main {
    width:100%;
    margin:0 auto;
  }
  `]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
