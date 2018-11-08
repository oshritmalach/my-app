import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NgbdCarouselBasic } from './header.component';
import { ListComponent } from './list.component';
import { modaledit } from './modaledit.component';
import { modaldelete } from './modaldelete.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'movie/new',
    component: modaledit
  }, {
    path: 'movie/:id/delete',
    component: modaldelete
  },

  {
    path: 'movie/:id/edit',
    component: modaledit
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
