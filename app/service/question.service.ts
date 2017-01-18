import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { plainToClass, plainToClassFromExist } from "class-transformer";
import { Question, Country } from '../model';
import { Environment } from '../config/environment';

@Injectable()
export class QuestionService {

  private apiUrl = Environment.questionServiceApiUrl;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  generate(proposalsNb: number) : Promise<Question> {
    const url = `${this.apiUrl}/quiz/${proposalsNb}`;

    return this.http
        .get(url, {headers: this.headers})
        .toPromise()
        .then((response) => {
            let tmp:Question = plainToClass<Question, string>(Question, response.json());

            tmp.proposals = plainToClass(Country, tmp.proposals);
            tmp.answer = plainToClass<Country, Object>(Country, tmp.answer);

            return tmp;
        });
  }
}