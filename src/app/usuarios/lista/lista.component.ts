import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {UsuariosModule} from '../usuarios.module';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: Observable<UserModel[]>;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsers();

  }

}
