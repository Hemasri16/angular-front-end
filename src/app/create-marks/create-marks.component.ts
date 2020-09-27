import { Component, OnInit } from '@angular/core';
import{Marks}from '../marks';
import{MarksService} from '../marks.service';
import{Router} from '@angular/router';



@Component({
  selector: 'app-create-marks',
  templateUrl: './create-marks.component.html',
  styleUrls: ['./create-marks.component.css']
})
export class CreateMarksComponent implements OnInit {

  marks:Marks=new Marks();
  submitted=false;

  stud_names: string[] = ['bhavana', 'ravi', 'devi'];
  exam_names: string[] = ['sem1', 'sem2', 'sem3','sem4'];
  
  constructor(private marksService:MarksService,
    private router:Router) { }

  ngOnInit() {
  }

  newStudent():void{
    this.submitted=false;
    this.marks=new Marks();
  }

  save() {
    this.marksService
    .createMarks(this.marks).subscribe(data => {
      console.log(data)
      this.marks = new Marks();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/marks']);
  }
}


