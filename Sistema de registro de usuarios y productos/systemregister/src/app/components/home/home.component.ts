import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// modal de angular material
import { MatDialog } from '@angular/material/dialog';
import { WelcomeModalComponent } from 'src/app/components/welcome-modal/welcome-modal.component';
// modelo de usuario administrador
import { userAdmin } from 'src/app/models/userAdmin';
// servicio de autenticacion
import { AuthService } from 'src/app/services/auth.service';
// libreria de alertas modales
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public userAdmin: userAdmin = {
    email: '',
    pass: '',
  };
  public token!: string;
  public error!: string;
  public conditionTemplate!: boolean;

  constructor(
    public dialog: MatDialog,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // llamamos al modal de bienvenida al iniciar la aplicacion. solo si no hay nadie logueado en este caso si no existe un
    // token en el local storage
    if (!localStorage.getItem('token')) {
      this.conditionTemplate = true;
      this.openDialog();
    } else {
      this.conditionTemplate = false;
    }
  }

  // metodo que llama al modal de bienvenida.
  openDialog() {
    this.dialog.open(WelcomeModalComponent);
  }

  login() {
    // llamamos a nuestro servicio el cual hace una peticion post  para traernos el  token desde el servidor
    this._authService.gToken(this.userAdmin).subscribe((data: any) => {
      this.token = data.token;
      this.error = data.messageError;

      if (this.token !== undefined) {
        // creamos el token en el local storage
        localStorage.setItem('token', this.token);

        // llamamos al modal de alerta
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: `Bienvenido ${this.userAdmin.email}`,
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigateByUrl('/users');
      } else {
        // llamamos al modal de alerta
        Swal.fire({
          title: 'Error!',
          text: `${this.error}`,
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.token == undefined;
    location.reload();
  }
}
