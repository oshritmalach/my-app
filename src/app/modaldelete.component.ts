import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'listing-dialog',
    template: `
   `
})
export class modaldelete implements AfterViewInit {
  myindex:number;
    constructor(private data:DataService,private route:ActivatedRoute, private router: Router) { }
    ngOnInit() {  
        this.route.params.subscribe( res => this.myindex = res.id );
        const swalWithBootstrapButtons = swal.mixin({
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false,
        })
        
        swalWithBootstrapButtons({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            this.deletePost();
            swal({
              position: 'center',
              type: 'success',
              title: 'Done!!!!',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/']); 
          } else if (
            result.dismiss === swal.DismissReason.cancel
          ) {
              swal({
                position: 'center',
                type: 'error',
                title: 'Action canceled',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigate(['/']); 
          }
        })
    }
    deletePost():void {
      console.log(this.myindex);
        this.data.delete(this.myindex);  
    }
    ngAfterViewInit() {
    }
}
