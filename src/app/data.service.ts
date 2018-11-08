import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  moviesArry:any = []

  constructor(private http: HttpClient, private router: Router) {
    let url: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=af359b6e';   
    this.http.get<any>(url).subscribe( data => { 
      this.moviesArry.push(
        {
          id: + new Date(),
          Title: data.Title,
          Year: data.Year,
          Runtime:data.Runtime,
          Genre:data.Genre,
          Director:data.Director,
          imge:"./assets/1אין בתולות בקריות - באנר אתר.jpg"
        }
      );
    });
  }


  allMovices(): any{
    return this.moviesArry;
  }

  get(index:number): any {
    return this.moviesArry[index] ? this.moviesArry[index] : [];    
  }


  add(title:string,year:number,Runtime:string,Genre:string,Director:string,img:string): number {
    this.moviesArry.push({
      id: + new Date(),
      Title: title,
      Year: year,
      Runtime:Runtime,
      Genre:Genre,
      Director:Director,
      imge:img
    });
    return this.moviesArry.length-1;
  }

  delete(index:number): void {
    console.log(index)
    if(this.moviesArry[index]) {
      this.moviesArry.splice(index,1);
      // if(this.moviesArry.length == 1){
      //   this.moviesArry =[];
      // }
    }
  }
  
}
