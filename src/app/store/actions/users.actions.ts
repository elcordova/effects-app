import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const CARGAR_USERS = '[users] Cargar usuarios';
export const CARGAR_USERS_FAIL = '[users] Cargar usuarios fail';
export const CARGAR_USERS_SUCCESS = '[users] Cargar usuarios success';

export class LoadUsersAction implements Action {
  readonly type = CARGAR_USERS;
}


export class LoadUsersFailAction implements Action {
  readonly type = CARGAR_USERS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadUsersSuccessAction implements Action {
  readonly type = CARGAR_USERS_SUCCESS;

  constructor(public usuarios: UserModel[]) {
  }
}


export type UsersActions = LoadUsersAction | LoadUsersFailAction | LoadUsersSuccessAction ;
