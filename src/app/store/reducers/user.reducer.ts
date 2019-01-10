import {UserModel} from '../../models/user.model';
import * as fromUser from '../actions';


export interface UserState {
  user: UserModel;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const userInitialState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function userReducer(state = userInitialState, action: fromUser.UserActions): UserState {
  switch (action.type) {
    case fromUser.CARGAR_USER:
      return {...state, loading: true, loaded: false, error: null};
    case fromUser.CARGAR_USER_SUCCESS:
      return {...state, loading: false, loaded: true, user: action.usuario};
    case fromUser.CARGAR_USER_FAIL:
      return {...state, loaded: false, loading: false, error: action.payload};
    default:
      return state;
  }
}
