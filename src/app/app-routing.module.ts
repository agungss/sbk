import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { QuizComponent } from './quiz/quiz.component';
import { NahwuComponent } from './nahwu/nahwu.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'start', component: QuizComponent },
  { path: 'nahwu', component: NahwuComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
