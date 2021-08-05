import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '@app/_services';
import { User } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users:any;

    constructor(private userService: UserService) {}

    ngOnInit() {
			this.userService.getAll().subscribe(data => {
				this.users = data;
			});		
			
			console.log(this.users);
			
            
    }

    deleteUser(id: string) {
        const user = this.users.find((x: { id: string; }) => x.id === id);
        if (!user) return;
        user.isDeleting = true;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter((x: { id: string; }) => x.id !== id));
    }
}