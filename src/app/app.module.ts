import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Pipe, PipeTransform } from '@angular/core';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { NgbdCarouselBasic } from './header.component';
import { ListComponent } from './list.component';
import { modaledit} from './modaledit.component';
import { modaldelete } from './modaldelete.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@Pipe({
  name: 'noneenglish'
})
export class noneenglishPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return  value.replace(/[^a-zA-Z0-9 ]/g, "");
  }

}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NgbdCarouselBasic,
    ListComponent,
    modaledit,
    modaldelete,
    noneenglishPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  exports: [MatCardModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

