import { Component, EventEmitter, Input, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {
  @Input() 'student': Student;
  // @Output() updateStudent: EventEmitter<Student> = new EventEmitter();
  @Input() 'updatedStudent': Student
  @Input() 'toBeDeleteddStudent': Student;

  'localItem': string | null;
  'students': Student[];
  'overlay': boolean = false;
  'oneStudent': Student;
  'index': number;
  constructor() {
    this.localItem = localStorage.getItem('students');
    if (this.localItem == null) {
      this.students = [];
    } else {
      this.students = JSON.parse(this.localItem);
    }
  }

  addStudent(student: Student) {
    this.students.push(student);
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  editStudent(student: Student) {
    this.overlay = true;
    this.oneStudent = student;

    this.index = this.students.indexOf(this.oneStudent);
    // this.students[index] = this.updatedStudent;
    // localStorage.setItem("students", JSON.stringify(this.students))
  }

  updateStudent(updatedStudent: Student){
    this.students[this.index] = updatedStudent;
    localStorage.setItem("students", JSON.stringify(this.students))
    this.closeOverlay();
  }

  deleteStudent(toBeDeleteddStudent: Student){
    this.students.splice(this.index, 1)
    localStorage.setItem("students", JSON.stringify(this.students))
    this.closeOverlay();
  }

  closeOverlay() {
    this.overlay = false;
  }
}
