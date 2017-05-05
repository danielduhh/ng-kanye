import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App Router
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/albums'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
