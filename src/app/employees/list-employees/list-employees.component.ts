import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from  './../../shared/employee.service'

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

 employees: Employee[];
 empDisplay: Employee;
 i: number = 0;
 empData:Employee;
  constructor( private _empService: EmployeeService ) {}

  ngOnInit() {
    this.employees = this._empService.getEmployees();
    // this.empDisplay = this.employees[0];
  }

  // onNextEmp(){
  //   if( this.i < this.employees.length-1){
  //     this.i++;
  //     this.empDisplay = this.employees[this.i];
  //   }
  //   else {
  //     this.i = 0;
  //     this.empDisplay = this.employees[this.i];
  //   }
  // }

  // handiEvent(e){
  //   this.empData = e;
  //   // console.log(this.empDisplay)
  // }



}
