import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(employees: Employee[], searchTerm: string): Employee[] {
    if ( !employees || !searchTerm )
      return employees;
    // if ( !employees || !searchTerm )
    //   return employees;

    return employees.filter(e => e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
