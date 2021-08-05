import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';

const baseUrl = `${environment.apiUrl}/users`;

@Injectable({ providedIn: 'root' })
export class UserService {
	headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getAll() {
			var username = 'user9'
			var password = 'kurougerit'
	
			this.headers.set('Authorization', 'Basic ' +
			btoa(username + ":" + password));
	
			return this.http.get('https://dummy-api.cm.edu/employees', { headers: this.headers });
		}

    getById(id: string) {
			var username = 'user9'
    	var password = 'kurougerit'
      this.headers.set('Authorization', 'Basic ' +
    	btoa(username + ":" + password));

      return this.http.get(`https://dummy-api.cm.edu/employees/${id}`, { headers: this.headers });
    }

    create(params: any) {
			var username = 'user9'
    	var password = 'kurougerit'
      this.headers.set('Authorization', 'Basic ' +
    	btoa(username + ":" + password));

      return this.http.post('https://dummy-api.cm.edu/employees', params, { headers: this.headers });
    }

    update(id: string, params: any) {
			var username = 'user9'
    	var password = 'kurougerit'
      this.headers.set('Authorization', 'Basic ' +
    	btoa(username + ":" + password));

      return this.http.put(`https://dummy-api.cm.edu/employees/${id}`, params, { headers: this.headers });
    }

    delete(id: string) {
			var username = 'user9'
    	var password = 'kurougerit'
      this.headers.set('Authorization', 'Basic ' +
    	btoa(username + ":" + password));

      return this.http.delete(`https://dummy-api.cm.edu/employees/${id}`, { headers: this.headers });
    }
}