export class Score {

    correct: number;
    wrong: number;

    constructor() {
      this.correct = 0;
      this.wrong = 0;  
    } 

    asked() : number {
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