import { Component, OnInit } from '@angular/core';
import { Marks } from '../marks';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import{MarksService} from '../marks.service';


@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent implements OnInit {

  marks: Observable<Marks[]>;

  exam_names: string[] = ['sem1', 'sem2', 'sem3', 'sem4'];
  constructor(private marksService: MarksService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.marks = this.marksService.getMarksList();
  }

  deleteMarks(id: number) {
    this.marksService.deleteMarks(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateMarks(id: number){
    this.router.navigate(['update-marks', id]);
  }
 
}
