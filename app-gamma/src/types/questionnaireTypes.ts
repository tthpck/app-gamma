export type QuestionOption = {
    id: number;
    option: string;
    points: number;
}



export type Questionnaire = {
    id: string;
    question: string;
    options: QuestionOption[]

}