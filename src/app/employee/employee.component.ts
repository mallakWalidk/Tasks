import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('callDialog') callDialog! :TemplateRef<any>;

  maxDate=new Date(2022,11);
  maxBirth=new Date(2004,11);

  employers = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name:new FormControl('', [Validators.required]),
    depNumber:new FormControl('', [Validators.required]),
    birthDate:new FormControl('', [Validators.required]),
    salary:new FormControl('', [Validators.required]),
    startWork:new FormControl('', [Validators.required])
  })

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
 submit(){
console.log(this.employers.value)
this.dialog.open(this.callDialog);
}
}
