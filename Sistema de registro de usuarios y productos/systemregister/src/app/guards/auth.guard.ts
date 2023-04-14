import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// libreria de alerta
import Swal from 'sweetalert2';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private aut: AuthService, private router: Router) {}

  canActivate() {
    // si  existe un token en el localStorage returna true
    if (localStorage.getItem('token')) {
      return true;
    } else {
      // llamamos al modal de alerta
      Swal.fire({
        title: 'Sección protegida',
        text: ` Debes inicar sesión para poder acceder`,
        icon: 'info',
        confirmButtonText: 'Cerrar',
      });

      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
