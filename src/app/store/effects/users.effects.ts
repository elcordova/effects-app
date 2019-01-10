import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as usersActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsuarioService} from '../../services/usuario.service';
import {of} from 'rxjs';


@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UsuarioService) {

  }

  @Effect()
  cargarUsers = this.actions$.pipe(
    ofType(usersActions.CARGAR_USERS),
    switchMap(() => {
      return this.userService.getUsers().pipe(
        map(users => new usersActions.LoadUsersSuccessAction(users)),
        catchError(err => {
          return of(new usersActions.LoadUsersFailAction(err));
        })
      );
    })
  );
}
