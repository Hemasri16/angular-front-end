import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { MarksListComponent } from './marks-list/marks-list.component';
import { CreateMarksComponent } from './create-marks/create-marks.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { HomeComponent } from './home/home.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ExamListComponent } from './exam-list/exam-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    MarksListComponent,
    CreateMarksComponent,
    UpdateMarksComponent,
    HomeComponent,
    CreateExamComponent,
    ExamListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
