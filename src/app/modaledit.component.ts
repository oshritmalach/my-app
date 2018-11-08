import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
    selector: 'listing-dialog',
    template: `
    <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: true }"></div>
    <div class="modal d-block fade" 
      [ngClass]="{ show: true }"
      id="listing-dialog" 
      tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>{{pageTitle}}</h5>
                    <button type="button"
                        class="close"
                        (click)="onClose()"
                        aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                
                    <input type="text" class="form-control" placeholder="Title:" [ngModel]="Titlemovie | noneenglish" (ngModelChange)="Titlemovie=$event"/>
                </div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" name="txtName" class="form-control" placeholder="Year:" [(ngModel)]="Yearmovie"  />
                    </div>
                    <div class="form-group">
                        <input type="text" name="txtEmail" class="form-control" placeholder="Runtime:" [(ngModel)]="Runtimemovie" />
                    </div>
                   
                </div>
                <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="txtPhone" class="form-control" placeholder="Genre:" [(ngModel)]="Genremovie"/>
            </div>
            <div class="form-group">
            <input type="text" name="txtPhone" class="form-control" placeholder="Director:" [(ngModel)]="Directormovie" />
        </div>
                </div>
            </div>
                </div>
                <div class="modal-footer">
                <h5>{{err}}</h5>
                <button type="button" class="btn btn-primary" (click)="saveMovie()">{{buttonTitle}}</button>
                  <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
})
export class modaledit implements AfterViewInit {
    pageTitle: string = 'Add new post';
    buttonTitle: string = 'save & add';
    themovies: any;
    theIndex: number = -1;
    Titlemovie: string = '';
    Yearmovie: number ;
    Runtimemovie: string = '';
    Genremovie: string = '';
    Directormovie: string = '';
    err:string ='';
    target:string ="";
    img:string="";
    constructor(private data:DataService,private route:ActivatedRoute, private router: Router) { }

    ngOnInit() {  
      if(this.router.url!='/movie/new') {
        this.route.params.subscribe( res => this.loadEditPost(res.id) );
      }
      
    }

    

    loadEditPost(index: any): void {
      this.pageTitle = 'Edit thie movie';
      this.buttonTitle= 'save & update';
      this.theIndex = index;
      this.themovies = this.data.get(index);    
      this.Titlemovie = this.themovies.Title ;
      this.Yearmovie = this.themovies.Year;
      this.Runtimemovie = this.themovies.Runtime;
      this.Genremovie = this.themovies.Genre;
      this.Directormovie = this.themovies.Director;
    }

    saveMovie(): void {
      let t = this.Titlemovie.trim();
      let y = this.Yearmovie;
      let r = this.Runtimemovie.trim();
      let g = this.Genremovie.trim();
      let d = this.Directormovie.trim();
      let i =  `https://picsum.photos/1200/500?random&t=${Math.random()}`
      if(t=='' || r=='' || g=='' || d=='')  {   
        this.err="missing data"; 
      }else if(isNaN(y) || (y<0 || y>2018))
      {
        this.err="The date should be a valid date"; 
      }
      else if (this.existingVlue(t)) {
          this.err="existingVlue";
        }
        else
        {
        if(this.theIndex>=0) {        
          this.themovies.Title = t;
            this.themovies.Year = y;     
            this.themovies.Runtime = r;        
            this.themovies.Genre = g;        
            this.themovies.Director = d; 
          }
        else {
            this.theIndex = this.data.add(t,y,r,g,d,i);
          } 
          swal({
            position: 'center',
            type: 'success',
            title: 'Done!!!!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/']); 
        }
      }
    
     existingVlue(title:string):boolean
     {
       if(this.data.allMovices().length>=1)
       {
        for (let i = 0; i < this.data.allMovices().length; i++) {
          if(title==this.data.allMovices()[i].Title)
          {
            return true;
          }
          else if (this.data.allMovices().length <= i){
            return false;
          }
         }
       }
    
    } 
    ngAfterViewInit() {
    }
    onClose() {
      setTimeout(
        () => this.router.navigate(['/']),
        100
      );
    }

    
}


