import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url: string = 'http://localhost:3000/users/login';
  // this.url = "http://localhost:3000/usuarios/Authorization"

  constructor(private _http: HttpClient) {}

  gToken(user: any) {
    // enviamos el usuario a traves de un post y este nos retorna un token, cuando valida que el usuario existe en al bct.
    return this._http.post(this.url, user);
  }
}
