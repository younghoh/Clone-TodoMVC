import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: ListComponent,
    data: {
      tabType: 'all',
    },
  },
  {
    path: 'active',
    component: ListComponent,
    data: {
      tabType: 'active',
    },
  },
  {
    path: 'completed',
    component: ListComponent,
    data: {
      tabType: 'completed',
    },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
