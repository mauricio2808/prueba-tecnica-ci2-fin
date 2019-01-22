import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tarea } from '../models/tarea';
import { UserManager, User, WebStorageStateStore, Log } from 'oidc-client';

@Injectable()
export class TareaService{
	public url: string;
	oidcUser: User;
	userManager: UserManager;
	initialized = false;

	constructor(
		public _http: Http
	){
		this.url = "https://drsgps.co/protectedapi";
		Log.logger = console;
		const config = {
		  authority: 'https://drsgps.co/identity',
		  client_id: 'js',
		  redirect_uri: `http://localhost:500./callback.html`,
		  scope: 'openid profile projects-api',
		  response_type: 'id_token token',
		  post_logout_redirect_uri: `http://localhost:5003/index.html`,
		  userStore: new WebStorageStateStore({ store: window.localStorage }),
		  automaticSilentRenew: true,
		  //silent_redirect_uri: `http://localhost:4200/assets/silent-redirect.html`
		};
		this.userManager = new UserManager(config);	
	}
	initSession(): Promise<User> {
		return this.userManager.getUser().then(user => {
		  if (user && !user.expired) {
			this.oidcUser = user;
			if (!this.initialized) {
			  // load user profile, client security context, permissions, etc.
			  this.initialized = true;
			}
			return user;
		  }
		  else { this.userManager.signinRedirect(); }
		});
	}
  
	login(): Promise<any> {
	  return this.userManager.signinRedirect();
	}
  
	logout(): Promise<any> {
	  return this.userManager.signoutRedirect();
	}
  
	isLoggedIn(): boolean {
	  return this.oidcUser && this.oidcUser.access_token && !this.oidcUser.expired;
	}
  
	getAccessToken(): string {
	  return this.oidcUser ? this.oidcUser.access_token : '';
	}

	getTareas(){
		return this._http.get(this.url+'tareas/consultar?').map(res => res.json());
	}

	getTarea(id){
		return this._http.get(this.url+'tarea/'+id).map(res => res.json());
	}

	addTarea(tarea: Tarea){
		let json = JSON.stringify(tarea);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'tareas/crear', params, {headers: headers})
						 .map(res => res.json());
	}

	editTarea(id, tarea: Tarea){
		let json = JSON.stringify(tarea);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'tareas/actualizar'+id, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteTarea(id){
		return this._http.get(this.url+'tarea/borrar'+id)
						 .map(res => res.json());
	}
}

