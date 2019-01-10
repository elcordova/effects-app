import {UserModel} from '../../models/user.model';
import * as fromUsers from '../actions';


export interface UsersState {
  users: UserModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(state = usersInitialState, action: fromUsers.UsersActions): UsersState {
  switch (action.type) {
    case fromUsers.CARGAR_USERS:
      return {...state, loading: true, error: null};
    case fromUsers.CARGAR_USERS_SUCCESS:
      return {...state, loading: false, loaded: true, users: action.usuarios};
    case fromUsers.CARGAR_USERS_FAIL:
      return {...state, loaded: false, loading: false, error: action.payload};
    default:
      return state;
  }
}
