import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Question, Country, Score } from '../../model';
import { QuestionService } from '../../service'

import { Environment } from '../../config/environment';

@Component({
  selector: 'play-countries-flag',
  templateUrl: 'app/ui/play-countries-flag/play-countries-flag.component.html',
  styleUrls: ['app/ui/play-countries-flag/play-countries-flag.component.css'],
})

export class PlayCountriesFlagComponent implements OnInit {
  
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
