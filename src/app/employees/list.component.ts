import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EmployeeService } from '../employee.service';


@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users: any = [];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}