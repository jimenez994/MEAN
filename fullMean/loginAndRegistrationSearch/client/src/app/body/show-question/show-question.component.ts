import { Component, OnInit } from '@angular/core';
import { Question } from '../../server/models/question';
import { Router } from '@angular/router';
import { QuestionService } from '../../server/controllers/question.service';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../../server/controllers/answer.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {

  question: Question = new Question;
  question_id;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _quetionService: QuestionService,
    private _answerService: AnswerService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.question_id = params.id)
    this.getQuestion()
  }
  getQuestion(){
    console.log(this.question_id);
    this._quetionService.getOneQuestion(this.question_id).subscribe(
      (res) => {
        console.log(res)
        this.question = res.json();
      }
    )
  }
  likeAnswer(id){
    console.log(id);
    this._answerService.likeAnswer(id).subscribe(
      (res) => {
        this.getQuestion();
      }
    )
  }
}
