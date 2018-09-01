import { TestBed, async, inject } from '@angular/core/testing';

import { CreateEmployeeGuard } from './create-employee.guard';

describe('CreateEmployeeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEmployeeGuard]
    });
  });

  it('should ...', inject([CreateEmployeeGuard], (guard: CreateEmployeeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
