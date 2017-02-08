import { Component } from '@angular/core';

import { QuizModeEnum } from '../../model';

@Component({
  selector: 'home',
  templateUrl: 'app/ui/home/home.component.html',
  styleUrls: [],
})

export class HomeComponent {
  
  QuizModeEnum = QuizModeEnum; // let QuizModeEnum be available in template
}
