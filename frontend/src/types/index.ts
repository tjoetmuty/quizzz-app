export interface QuestionsType {
  id?: number
  question?: string
  options?: string[]
}

export interface ResultType{
  id: number
  desc: string
  point: string
}

export interface QuizRulesType {
  id: number
  rule: string
}