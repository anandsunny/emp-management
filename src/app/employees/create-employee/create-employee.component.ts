import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from './../../models/department'
import { Photo } from './../../models/photo'
import { Employee } from './../../models/employee'
import { EmployeeService } from '../../shared/employee.service';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public employee: Employee = new Employee();
  
  @ViewChild('empForm') public createEmpForm: NgForm;
  // public gender: string = "male";
  // public isActive: boolean = true;
  // public dep: number = 3;

  public departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ]

  public photos: Photo[] = [
    { path: 'assets/images/ram.png', name: "Photo 1" },
    { path: 'assets/images/kamala.png', name: "Photo 2" },
    { path: 'assets/images/narayan.png', name: "Photo 3" }
  ]
  
  constructor(private _empService: EmployeeService, private _router: Router) { 
    this.employee.gender = 'male'
    this.employee.department = '3'
    this.employee.isActive = true
    this.employee.photoPath = 'assets/images/narayan.png'
  }

  ngOnInit() {
  }

  saveEmp(){
    this._empService.createEmployee(this.employee);
    this._router.navigate(['list']);
  }

}
