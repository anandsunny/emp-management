import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() childEmp: Employee[];
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  public id: number;
  private _searchTerm: string;
  public filteredEmp: Employee[];
  constructor(private _router: Router, private _actRout: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this._actRout.snapshot.paramMap.get('id');
    this._actRout.queryParamMap.subscribe((queryParams) => {
      this.filteredEmp = this.childEmp;
      
      if(queryParams.has('searchTerm'))
        this.searchTerm = queryParams.get('searchTerm');

    })
    
  }

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(val : string) {
    this._searchTerm = val;
    this.filteredEmp = this.filtereEmp(val);
    console.log(this.filteredEmp);
    if ( val == '')
      this.filteredEmp = this.childEmp;
  }

  filtereEmp(searchString: string) : Employee[] {
    return this.filteredEmp.filter(e => e.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  // handelClick(){
  //   this.notify.emit(this.childEmp);
  // }

  // getEmployee(){
  //   this.childEmp.id;
  // }

  onDetails(empId){
    this._router.navigate(['employee', empId], {
      queryParams: { "searchTerm": this.searchTerm, 'testParam': 'testValue' }
    })
  }

}
