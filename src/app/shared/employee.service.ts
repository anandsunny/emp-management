import { Injectable } from '@angular/core';
import { Employee } from './../models/employee'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Ram',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'ram@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/ram.png'
    },
    {
      id: 2,
      name: 'Kamala',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/kamala.png'
    },
    {
      id: 3,
      name: 'Narayan',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/narayan.png'
    },
  ]
  constructor() { }

  getEmployees()  {
    return this.employees
  }

  getEmployee(empId: number): Employee {
   return this.employees.find( e => e.id === empId);
  }

  createEmployee(emp:Employee) {
    this.employees.push(emp);
  }
}
