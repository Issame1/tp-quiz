import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from "../question";
import { QuizService } from 'src/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[]
  iQuestion = 0
  currentQuestion: Question 
  answer: string
  found: boolean
  hasNext = true

  error: any;

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    
  }



  newGame() {
    this.hasNext = true;
    
    this.quizService.buildNewQuiz(10).subscribe(
      q => {
        this.questions = q,
          console.log(this.questions)
          this.loadNextQuestion()
      },
      error => console.log(error)
    )
  }


loadNextQuestion(){
  if(this.hasNext == true){
    this.currentQuestion=this.questions[this.iQuestion]
    this.iQuestion++
    console.log("indice " +this.iQuestion)
  }
}

timeSpent(){
}

answerGiven(answer​: string){
  if(answer === this.currentQuestion.capitale){
    this.found = true;
    this.quizService.score++;
    console.log(answer)

  }else{
    this.found = false;
  }
  this.showAnswer()
}

showAnswer(){
  
}


}
