import { QuizModeEnum } from '.';

export class Question {
    proposals: Country[];
    answer: Country;

    tryAnswer(answer: Country) : boolean {
        return this.answer.equals(answer);
    }
}

export class Country {
    name: string;
    flagPath: string;
    capitalCity: string;

    equals(country: Country) : boolean {
        return this.name === country.name;
    }

    showQuestion(mode: QuizModeEnum) : string {
        if(mode === QuizModeEnum.LABEL_OVER_LABELS) {
            return this.capitalCity;
        } else if(mode === QuizModeEnum.LABEL_OVER_IMAGES) {
            return this.name;
        } else if(mode === QuizModeEnum.IMAGE_OVER_LABELS) {
            return this.flagPath;
        }
        throw "Quiz mode not found : "+mode;
    }

    showProposal(mode: QuizModeEnum) : string {
        if(mode === QuizModeEnum.LABEL_OVER_LABELS) {
            return this.name;
        } else if(mode === QuizModeEnum.LABEL_OVER_IMAGES) {
            return this.flagPath;
        } else if(mode === QuizModeEnum.IMAGE_OVER_LABELS) {
            return this.name;
        }
        throw "Quiz mode not found : "+mode;
    }
}