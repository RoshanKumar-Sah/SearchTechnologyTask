import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent {
  @Input() 'student': Student;
  @Output() updateStudent: EventEmitter<Student> = new EventEmitter();
  @Output() deleteStudent: EventEmitter<Student> = new EventEmitter();

  'name': string;
  'grade': string;
  'address': string;
  'rollno': number;
  'active': boolean;

  ngOnInit() {
    if (this.student) {
      this.name = this.student.name;
      this.grade = this.student.grade;
      this.address = this.student.address;
      this.rollno = this.student.rollno;
      this.active = this.student.active;
    }
  }

  onSubmit() {
    const updatedStudent = {
      name: this.name,
      grade: this.grade,
      address: this.address,
      rollno: this.rollno,
      active: this.active,
    };
    // console.log(updatedStudent);

    this.updateStudent.emit(updatedStudent);
  }

  delete() {
    const toBeDeleteddStudent = this.student;
    this.deleteStudent.emit(toBeDeleteddStudent);
  }
}
