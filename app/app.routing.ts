import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { HomeComponent }   from './ui/home/home.component';
import { PlayOneOverNComponent }   from './ui/play-one-over-n/play-one-over-n.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'play-flags-country',
    component: PlayOneOverNComponent
  },
  {
    path: 'play-countries-flag',
    component: PlayOneOverNComponent
  },
  {
    path: 'play-capital-country',
    component: PlayOneOverNComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})

export class AppRoutingModule {}