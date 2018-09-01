import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  childEmp: Employee;
  _empID: number;
  constructor(private _actRout: ActivatedRoute,
              private _empService: EmployeeService,
              private _router: Router) { }

  // ngOnInit() {
  //   this._empID = +this._actRout.snapshot.paramMap.get('id');
  //   this.childEmp = this._empService.getEmployee(this._empID);
  // }

  ngOnInit(){
    this._actRout.paramMap.subscribe(data => {
      this._empID = +data.get('id');
      this.childEmp = this._empService.getEmployee(this._empID);
    });
  }

  onNextEmp(){
    if(this._empID < 3)
      ++this._empID;
    else
    this._empID = 1;
    this._router.navigate(['employee', this._empID], { queryParamsHandling: "preserve" });
    
  }

}
