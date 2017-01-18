import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Question, Country } from '../../model';
import { QuestionService } from '../../service'

import { Environment } from '../../config/environment';

@Component({
  selector: 'play-game',
  templateUrl: 'app/ui/play-game/play-game.component.html',
  styleUrls: ['app/ui/play-game/play-game.component.css'],
})

export class PlayGameComponent implements OnInit {
  
  question: Question;

  constructor(
    private questionService: QuestionService) { }
  
  ngOnInit() {
    this.questionService.generate(4).then(x => {
      this.question = x;
    });
  }

  verifySelection(answer: Country) : void {
    alert(this.question.tryAnswer(answer));
  }

  getImagesUrl() : string {
    return Environment.imagesUrl;
  }
}
