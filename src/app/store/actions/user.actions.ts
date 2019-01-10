import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const CARGAR_USER = '[users] Cargar usuario';
export const CARGAR_USER_FAIL = '[users] Cargar usuario fail';
export const CARGAR_USER_SUCCESS = '[users] Cargar usuario success';

export class LoadUserAction implements Action {
  readonly type = CARGAR_USER;

  constructor(public id: number) {
  }
}

export class LoadUserFailAction implements Action {
  readonly type = CARGAR_USER_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadUserSuccessAction implements Action {
  readonly type = CARGAR_USER_SUCCESS;

  constructor(public usuario: UserModel) {
  }
}


export type UserActions = LoadUserAction | LoadUserFailAction | LoadUserSuccessAction ;
