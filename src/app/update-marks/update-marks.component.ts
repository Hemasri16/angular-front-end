import { Component, OnInit } from '@angular/core';
import { Marks } from '../marks';
import { ActivatedRoute, Router } from '@angular/router';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit {

  id:number;
  marks:Marks;
  submitted=false;

  constructor(private route:ActivatedRoute,private router:Router,
    private marksService:MarksService) { }

  ngOnInit()  {
    this.marks=new Marks();

    this.id=this.route.snapshot.params['id'];
    this.marksService.getMarks(this.id)
    .subscribe(data => {
      console.log(data)
      this.marks = data;
    }, error => console.log(error));
}

updateMarks() {
  this.marksService.updateMarks(this.id, this.marks)
    .subscribe(data => {
      console.log(data);
      this.marks= new Marks();
      this.gotoList();
    }, error => console.log(error));
}



onSubmit() {
  this.updateMarks();
  this.submitted=true;
}

gotoList() {
  this.router.navigate(['/marks']);
}
}
