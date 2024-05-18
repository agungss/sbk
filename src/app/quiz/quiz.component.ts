import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    trigger('answer', [
      transition('void => *', [style({ opacity: 0, transform: 'translateY(-3rem)' }), animate(300)])
    ])
  ]
})
export class QuizComponent implements OnInit {
  quizzes = [];

  currentQuiz: number;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];

  result = false;
  resultStatus = 'Show Result';

  currentQuest: number = 0; // set initial


  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.currentQuiz = this.getRandom();

    this.prevAnswered.push(this.currentQuiz);
  }

  onAnswer(option: boolean) {
    // if (this.correctAnswers) {

    //   this.answerSelected = true;
    // } else {
    //   this.answerSelected = false;
    // }
    setTimeout(() => {
      let newQuiz = this.getRandom();
      while (this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < this.quizzes.length) {
        newQuiz = this.getRandom();
       
      }

      this.currentQuiz = newQuiz;
      this.prevAnswered.push(this.currentQuiz);

      this.answerSelected = false;
    }, 300);



    if (option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;

    }

  }

  getQuestion() {
    this.currentQuest = Math.floor(Math.random() * this.quizzes.length);

  }

  getRandom() {
    return Math.floor(Math.random() * this.quizzes.length);
  }

  showResult() {
    this.result = true;
    this.resultStatus = 'Main Lagi!';
  }
  playAgain() {
    this.prevAnswered = [];
    this.prevAnswered.push(this.getRandom());
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }


}
