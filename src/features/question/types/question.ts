export interface QuestionnaireType {
  questions: QuestionType[];
}

export interface QuestionType {
  id: number;
  keyword: string;
  question: string;
  answers: AnswersType[];
}

export interface AnswersType {
  value: number;
  label: string;
}
