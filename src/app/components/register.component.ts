
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
	selector: 'register',
	templateUrl: '../views/register.html'
})
export class RegisterComponent implements OnInit{
    public titulo: string;
   

	constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Registro';
        
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
    }
    
}