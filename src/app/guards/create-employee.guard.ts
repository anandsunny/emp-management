import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './../employees/create-employee/create-employee.component'

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeGuard implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean{
    if(component.createEmpForm.dirty && !component.createEmpForm.submitted){
      return confirm('Are you sure you want discard your changes?');
    }
    return true;
  }
}
