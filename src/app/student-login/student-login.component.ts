import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
router: any;
  teacherlogin() {
    this.router.navigate( "teacherlogin");
  }
  constructor() { }

  ngOnInit() {
  }

}