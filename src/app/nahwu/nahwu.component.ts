import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
// import { QuizService } from '../quiz.service';
import { NahwuService } from '../nahwu.service';

@Component({
  selector: 'app-nahwu',
  templateUrl: './nahwu.component.html',
  styleUrls: ['./nahwu.component.scss'],
  animations: [
    trigger('answer', [
      transition('void => *', [style({ opacity: 0, transform: 'translateY(-3rem)' }), animate(300)])
    ])
  ]
})
export class NahwuComponent implements OnInit {
  nahwus = [];

  currentNahwu: number;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];

  result = false;
  resultStatus = 'Show Result';

  currentQuest: number = 0; // set initial


  constructor(private nahwuService: NahwuService) { }

  ngOnInit(): void {
    this.nahwus = this.nahwuService.getNahwus();
    this.currentNahwu = this.getNahwu();

    this.prevAnswered.push(this.currentNahwu);
  }

  onAnswer(option: boolean) {
    // if (this.correctAnswers) {

    //   this.answerSelected = true;
    // } else {
    //   this.answerSelected = false;
    // }
    setTimeout(() => {
      let newNahwu = this.getNahwu();
      while (this.prevAnswered.includes(newNahwu) && this.prevAnswered.length < this.nahwus.length) {
        newNahwu = this.getNahwu();
       
      }

      this.currentNahwu = newNahwu;
      this.prevAnswered.push(this.currentNahwu);

      this.answerSelected = false;
    }, 300);



    if (option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;

    }

  }

  getQuestion() {
    this.currentQuest = Math.floor(Math.random() * this.nahwus.length);

  }

  getNahwu() {
    return Math.floor(Math.random() * this.nahwus.length);
  }

  showResult() {
    this.result = true;
    this.resultStatus = 'Main Lagi!';
  }
  playAgain() {
    this.prevAnswered = [];
    this.prevAnswered.push(this.getNahwu());
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }


}
