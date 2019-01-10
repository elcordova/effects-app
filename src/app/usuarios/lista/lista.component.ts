import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {LoadUsersAction} from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  storeList: Observable<any>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsersAction());
    this.storeList = this.store.pipe(select(store => store.usuarios));

  }

}
