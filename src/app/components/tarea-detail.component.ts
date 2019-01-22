import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea';

@Component({
	selector: 'tarea-detail',
	templateUrl: '../views/tarea-detail.html',
	providers: [TareaService]
})
export class TareaDetailComponent{
	public tarea: Tarea;

	constructor(
		private _tareaService: TareaService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		console.log('tarea-detail.Component.ts cargado...');

		this.getTarea();
	}

	getTarea(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._tareaService.getTarea(id).subscribe(
				response => {
					if(response.code == 200){
						this.tarea = response.data;
					}else{
						this._router.navigate(['/tareas']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}