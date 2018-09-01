import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { routing } from './app.routing';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeeDirective } from './directives/employee.directive';
import { DisplayEmployeeComponent } from './employees/list-employees/display-employee/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { SearchEmployeePipe } from './pipes/search-employee.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EmployeeDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    SearchEmployeePipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
