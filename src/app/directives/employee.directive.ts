import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmployee]',

})
export class EmployeeDirective {
    constructor(el: ElementRef) {
      console.log(el);
    }
}
