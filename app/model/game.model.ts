export class Score {

    correct: number;
    wrong: number;

    constructor() {
      this.correct = 0;
      this.wrong = 0;  
    } 

    total() : number {
      return this.correct + this.wrong;
    }

    update(correct: boolean) : void {
      if(correct === true) {
        this.correct++;
      } 
      else {
        this.wrong++; 
      }
    }
}

export enum QuizModeEnum {
  LABEL_OVER_LABELS,
  IMAGE_OVER_LABELS,
  LABEL_OVER_IMAGES
}