import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as userActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsuarioService} from '../../services/usuario.service';
import {of} from 'rxjs';


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UsuarioService) {

  }

  @Effect()
  cargarUser = this.actions$.pipe(
    ofType(userActions.CARGAR_USER),
    switchMap((action: userActions.LoadUserAction) => {
      return this.userService.getUser(action.id).pipe(
        map(user => new userActions.LoadUserSuccessAction(user)),
        catchError(err => {
          return of(new userActions.LoadUserFailAction(err));
        })
      );
    })
  );
}
