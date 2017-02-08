import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Question, Country, Score, QuizModeEnum } from '../../model';
import { QuestionService } from '../../service'

import { Environment } from '../../config/environment';

@Component({
  selector: 'play-one-over-n',
  templateUrl: 'app/ui/play-one-over-n/play-one-over-n.component.html',
  styleUrls: ['app/ui/play-one-over-n/play-one-over-n.component.css'],
})

export class PlayOneOverNComponent implements OnInit {
  
  question: Question;
  proposalsNumber: number;
  score: Score;
  mode: QuizModeEnum;

  QuizModeEnum = QuizModeEnum; // let QuizModeEnum be available in template

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService) { }
  
  ngOnInit() {
    this.proposalsNumber = 4;
    this.generateQuestion();
    this.score = new Score();
    this.mode = +this.route.snapshot.params['mode'];
 
    if(QuizModeEnum[this.mode] === undefined) {
      throw new Error("Mode with id "+this.mode+" not found"); 
    }
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
