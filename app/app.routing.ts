import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { HomeComponent }   from './ui/home/home.component';
import { PlayGameComponent }   from './ui/play-game/play-game.component';

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
    path: 'play',
    component: PlayGameComponent
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