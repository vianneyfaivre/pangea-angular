export class Question {
    proposals: Country[];
    answer: Country;

    public tryAnswer(answer: Country) : boolean {
        return this.answer.equals(answer);
    }
}

export class Country {
    name: string;
    flagPath: string;
    capitalCity: string;

    public equals(country: Country) : boolean {
        return this.name === country.name;
    }
}