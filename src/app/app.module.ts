import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './MyComponents/student-table/student-table.component';
import { AddStudentComponent } from './MyComponents/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './MyComponents/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
