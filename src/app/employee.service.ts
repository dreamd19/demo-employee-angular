import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

    getAll() {
      this.headers.set('Authorization', 'Basic ' +
      btoa('username:password'));

      return this.http.get('https://dummy-api.cm.edu/employees', { headers: this.headers });
    }

    getById(id: string) {
      this.headers.set('Authorization', 'Basic ' +
      btoa('username:password'));

      return this.http.get(`https://dummy-api.cm.edu/employees/${id}`, { headers: this.headers });
    }

    create(params: any) {
      this.headers.set('Authorization', 'Basic ' +
      btoa('username:password'));

      return this.http.post('https://dummy-api.cm.edu/employees', params, { headers: this.headers });
    }

    update(id: string, params: any) {
      this.headers.set('Authorization', 'Basic ' +
      btoa('username:password'));

      return this.http.put(`https://dummy-api.cm.edu/employees/${id}`, params, { headers: this.headers });
    }

    delete(id: string) {
      this.headers.set('Authorization', 'Basic ' +
      btoa('username:password'));

      return this.http.delete(`https://dummy-api.cm.edu/employees/${id}`, { headers: this.headers });
    }
}
