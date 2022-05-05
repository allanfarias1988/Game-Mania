import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private _UsersService: UsersService) {}
  public users: Users[] = [];

  ngOnInit() {
    this._UsersService.getUsers().subscribe((retorno) => {
      this.users = retorno.map((item) => {
        return new Users(item.id, item.nome, item.email, item.password);
      });
    });
  }
}
