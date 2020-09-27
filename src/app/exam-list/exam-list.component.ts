import { Component, OnInit } from '@angular/core';  
import { ExamService } from '../exam.service';  
import { Exam } from '../exam';  
import { Observable } from "rxjs";  
import {Router} from '@angular/router';

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-exam-list',  
  templateUrl: './exam-list.component.html',  
  styleUrls: ['./exam-list.component.css']  
})  
export class ExamListComponent implements OnInit { 
    exams:Observable<Exam[]>;
  
 constructor(private examservice:ExamService,
    private router:Router) { }  

    ngOnInit(){
        this.reloadData();
    }
     reloadData(){
         this.exams=this.examservice.getExamsList();
     }
    
    }
