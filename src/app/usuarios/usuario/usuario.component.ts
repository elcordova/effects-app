import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {LoadUserAction} from '../../store/actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  currentUser: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.currentUser = this.store.pipe(select(obj => obj.usuario));

    this.router.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new LoadUserAction(id));
    });
  }

}
