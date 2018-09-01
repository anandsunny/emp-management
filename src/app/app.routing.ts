import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { CreateEmployeeGuard } from './guards/create-employee.guard';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

const router: Routes = [
    { path: 'list', component: ListEmployeesComponent },
    { path: 'create', component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeGuard] },
    { path: 'employee/:id', component: EmployeeDetailsComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
]
export const routing = RouterModule.forRoot(router);