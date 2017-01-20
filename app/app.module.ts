import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { HomeComponent }   from './ui/home/home.component';
import { PangeaComponent }   from './ui/pangea.component';
import { PlayFlagsCountryComponent }   from './ui/play-flags-country/play-flags-country.component';


import { AppRoutingModule }        from './app.routing';

import { QuestionService }  from './service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    PangeaComponent,
    HomeComponent,
    PlayFlagsCountryComponent
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [ 
    PangeaComponent 
  ]
})
export class AppModule {
}
