import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Question, Country, Score } from '../../model';
import { QuestionService } from '../../service'

import { Environment } from '../../config/environment';

@Component({
  selector: 'play-game',
  templateUrl: 'app/ui/play-game/play-game.component.html',
  styleUrls: ['app/ui/play-game/play-game.component.css'],
})

export class PlayGameComponent implements OnInit {
  
  question: Question;
  proposalsNumber: number;
  score: Score;

  constructor(
    private questionService: QuestionService) { }
  
  ngOnInit() {
    this.proposalsNumber = 4;
    this.generateQuestion();
    this.score = new Score();
  }

  generateQuestion() {   
    this.questionService
          .generate(this.proposalsNumber)
          .then(q => this.question = q);
  }

  verifySelection(answer: Country) : void {
    let correct: boolean = this.question.tryAnswer(answer);

    this.score.update(correct);

    this.generateQuestion();
  }

  getImagesUrl() : string {
    return Environment.imagesUrl;
  }
}
