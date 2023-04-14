import { Component, Input } from '@angular/core';
import { userModel } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss'],
})
export class ModalUserComponent {
  // variables que llegan desde el componente padre "users.components"
  @Input() openU!: boolean;
  @Input() openE!: boolean;
  @Input() openD!: boolean;

  public user: userModel;

  constructor(private _service: UsersService) {
    this.user = new userModel('', 0, 0);
  }

  agg() {
    this._service.createUser(this.user).subscribe((data) => {
      console.log(data);
    });
    location.reload();
  }

  edit() {
    this._service.updateUser(this.user.id, this.user).subscribe((data) => {
      console.log(data);
    });

    location.reload();
  }

  delete() {
    // capturamos el id del usuario que queremos eliminar  y lo enviamos por parametro al metodo del servicio
    this._service
      .deleteUser(this.user.id)
      .subscribe((data) => console.log(data));
    location.reload();
  }
}
