import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { HomeComponent }   from './ui/home/home.component';
import { PlayFlagsCountryComponent }   from './ui/play-flags-country/play-flags-country.component';
import { PlayCountriesFlagComponent }   from './ui/play-countries-flag/play-countries-flag.component';
import { PlayCapitalCountryComponent } from './ui/play-capital-country/play-capital-country.component';

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
    component: PlayFlagsCountryComponent
  },
  {
    path: 'play-countries-flag',
    component: PlayCountriesFlagComponent
  },
  {
    path: 'play-capital-country',
    component: PlayCapitalCountryComponent
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