import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, DoCheck {
  public openU: boolean = false;
  public openE: boolean = false;
  public openD: boolean = false;

  public users: any = [];

  constructor(private service: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  ngDoCheck(): void {}

  getUsers() {
    this.service.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  agg() {
    if (!this.openU) {
      this.openU = true;
      this.openE = false;
      this.openD = false;
    } else {
      this.openU = false;
    }
  }

  edit() {
    if (!this.openE) {
      this.openE = true;
      this.openU = false;
      this.openD = false;
    } else {
      this.openE = false;
    }
  }

  delete() {
    if (!this.openD) {
      this.openD = true;
      this.openU = false;
      this.openE = false;
    } else {
      this.openD = false;
    }
  }
}
