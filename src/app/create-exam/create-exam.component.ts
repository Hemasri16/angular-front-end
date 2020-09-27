import { Component, OnInit } from '@angular/core';
import{Exam}from '../exam';
import{ExamService} from '../exam.service';
import{Router} from '@angular/router';



@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  exam:Exam=new Exam();
  submitted=false;

  constructor(private examService:ExamService,
    private router:Router) { }

  ngOnInit() {
  }

  newStudent():void{
    this.submitted=false;
    this.exam=new Exam();
  }

  save() {
    this.examService
    .createExam(this.exam).subscribe(data => {
      console.log(data)
      this.exam = new Exam();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/exam']);
  }
}
