import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/Student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  @Output() addStudent: EventEmitter<Student> = new EventEmitter();
  @Input() 'student': Student;
 

  studentForm: any;
  'name': string;
  'grade': string;
  'address': string;
  'rollno': number;
  'active': boolean = true;



  onSubmit(form: NgForm) {
    const student = {
      name: this.name,
      grade: this.grade,
      address: this.address,
      rollno: this.rollno,
      active: this.active,
    };
    this.addStudent.emit(student);
    form.reset();
  }
}
