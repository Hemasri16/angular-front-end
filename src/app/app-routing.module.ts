import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import{CreateStudentComponent} from './create-student/create-student.component';


import {MarksListComponent}from './marks-list/marks-list.component';
import{CreateMarksComponent} from './create-marks/create-marks.component';
import {UpdateMarksComponent} from './update-marks/update-marks.component';
import { HomeComponent } from './home/home.component';

import {ExamListComponent}from './exam-list/exam-list.component';
import{CreateExamComponent} from './create-exam/create-exam.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: CreateStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
  {path : '',redirectTo:'marks',pathMatch: 'full'},
  { path: 'marks', component: MarksListComponent },
  { path: 'add-marks', component: CreateMarksComponent },
  { path: 'update-marks/:id', component: UpdateMarksComponent },
  {path : '',redirectTo:'exam',pathMatch: 'full'},
  { path: 'exam', component: ExamListComponent },

  { path: 'add-exam', component: CreateExamComponent },
  

  
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }