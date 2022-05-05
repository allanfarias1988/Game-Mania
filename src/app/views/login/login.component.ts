import { UsuariosModule } from './../../models/usuarios/usuarios.module';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarios = UsuariosModule;
  constructor(private CrudService: CrudService) {}

  ngOnInit() {}
  getUsuarios() {
    this.CrudService.getUsuarios().subscribe(
      (dados: UsuariosModule) => {
        this.usuarios = dados;
      },
      (error) => {}
    );
  }
}
