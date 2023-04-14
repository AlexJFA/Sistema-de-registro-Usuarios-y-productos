import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { userModel } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public urlApi: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  getAllUsers() {
    return this._http.get(`${this.urlApi}users`);
  }

  getUser() {
    return this._http.get(`${this.urlApi}users/id`);
  }

  createUser(user: any) {
    return this._http.post(`${this.urlApi}users`, user);
  }

  updateUser(id: string | undefined, user: any) {
    return this._http.put(`${this.urlApi}users/${id}`, user);
  }

  deleteUser(id: string | undefined) {
    // recibimos el id por parametros y lo enviamos por la URL
    return this._http.delete(`${this.urlApi}users/${id}`);
  }
}
