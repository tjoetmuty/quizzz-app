import { QuestionsType, QuizRulesType, ResultType } from "@/types";

export const RulesItem: QuizRulesType[] = [
  {
    id: 1,
    rule: "You will be asked 10 questions one after another."
  },
  {
    id: 2,
    rule: "10 points are awarded for the correct answer."
  },
  {
    id: 3,
    rule: "Each Question has three options. You can choose only one option."
  },
  {
    id: 4,
    rule: "You can review and change answers before the quiz finish"
  },
  {
    id: 5,
    rule: "The result will be declared at the end of quiz"
  },
]

export const QuestionsData: QuestionsType[] = [
  {
    id: 1,
    question: "JavaScript is an ______ language",
    options: [
      'Object-Oriented', 'Object-Based', 'Procedural'
    ]
  },
  {
    id: 2,
    question: "Which type of JavaScript language is ___?",
    options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
  },
  {
    id: 3,
    question: "Which of the following keywords is used to define a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
  },
  {
    id: 4,
    question: "Inside which HTML element do we put the JavaScript code?",
    options: ["<script>", "<javascript>", "<js>", "<scripting>"],
  },
  {
    id: 5,
    question: "Which function is used to print content in JavaScript?",
    options: ["console.log()", "print()", "display()", "log()"],
  },
]

export const ResultItems: ResultType[] = [
  {
    id: 1,
    desc: "Total Quiz Points",
    point: "50"
  },
  {
    id: 1,
    desc: "Total Questions",
    point: "2"
  },
  {
    id: 3,
    desc: "Total Attemps",
    point: "3"
  },
  {
    id: 4,
    desc: "Total Earn Points",
    point: "30"
  },
  {
    id: 4,
    desc: "Quiz Result",
    point: "Passed"
  },
]